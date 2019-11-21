import React, { ReactNode } from "react";
import { render } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer, { RootState } from "stores/rootReducer";
import { initStore } from "stores/initStore";

export function renderWithRedux(component: ReactNode, { initialState }: { initialState: RootState }) {
  const store = createStore(rootReducer, initialState);
  return {
    ...render(<Provider store={initStore}>{component}</Provider>),
    store
  };
}
