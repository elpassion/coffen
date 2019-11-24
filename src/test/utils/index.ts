import tmp from "tmp";
import open from "open";
import { generateImage } from "jsdom-screenshot";

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
