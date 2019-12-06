import { takeScreenshotOnTestError } from "@error-paparazzi/jest";

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

export const setupBrowserTests = () => {
  supressActWarnings();
  takeScreenshotOnTestError({ launchOptions: { defaultViewport: { width: 375, height: 812 } } });
};
