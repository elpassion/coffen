import { generateImage } from "jsdom-screenshot";
import open from "open";
import tmp from "tmp";

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
