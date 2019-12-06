import isCi from "is-ci";
import { generateImage } from "jsdom-screenshot";
import open from "open";
import tmp from "tmp";

export const screenshot = async () => {
  const path = tmp.fileSync({ postfix: ".png" }).name;
  await generateImage({
    screenshot: { path },
    launch: {
      defaultViewport: { width: 375, height: 812 }
    }
  });
  await open(path, { wait: false });
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

export const takeScreenshotOnError = () => {
  const makeScreenshotOnFail = (fn: any) => async () => {
    try {
      await fn();
    } catch (e) {
      if (!isCi) await screenshot();
      throw e;
    }
  };

  const wrapApply = (target: jest.It, that: any, args: Parameters<jest.It>) => {
    args[1] = makeScreenshotOnFail(args[1]);
    target.apply(that, args);
  };

  test = new Proxy(test, { apply: wrapApply });
  test.only = new Proxy(test.only, { apply: wrapApply });
  test.each = new Proxy(test.each, {
    apply: (target, that, args) => new Proxy(target.apply(that, args), { apply: wrapApply })
  });
};

export const setupBrowserTests = () => {
  supressActWarnings();
  takeScreenshotOnError();
};
