import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    title: "Commonwealth Communicator",
  },
  source: {
    entry: {
      index: "./src/main.tsx",
    },
    tsconfigPath: "./tsconfig.json",
  },
  output: {
    distPath: {
      root: "dist/web",
    },
    cleanDistPath: true,
  },
  resolve: {
    alias: {
      "@": "./src",
    },
  },
});
