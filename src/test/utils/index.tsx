import { createStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { generateImage } from "jsdom-screenshot";
import open from "open";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { initStore } from "stores/initStore";
import rootReducer, { RootState } from "stores/rootReducer";
import tmp from "tmp";

export function renderWithRedux(component: ReactNode, { initialState }: { initialState: RootState }) {
  const store = createStore(rootReducer, initialState);
  return {
    ...render(<Provider store={initStore}>{component}</Provider>),
    store
  };
}

export const screenshot = async () => {
  const path = tmp.fileSync({ postfix: ".jpg" }).name;
  await generateImage({
    screenshot: { path },
    launch: {
      defaultViewport: { width: 375, height: 812 }
    }
  });
  await open(path, { wait: true });
};

export const supressActWarnings = () => {
  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args: any[]) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });
};
