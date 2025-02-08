import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import { appConfig } from "./src/api/config";

const config = appConfig();

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        data: {
          appTitle: `${config.appTitle}-${config.appDescriptor}`,
          iconPath: `/${config.logo}`,
        },
      },
    }),
  ],
});
