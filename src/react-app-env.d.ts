/// <reference types="react-scripts" />

declare module "jsdom-screenshot" {
  function generateImage(options: any): Promise<void>;
}
