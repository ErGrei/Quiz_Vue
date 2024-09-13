import { defineConfig } from "vite";
// import paths from "vite-tsconfig-paths";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const setting = {
    base: "./",
    root: "./src",
    publicDir: "../public",
    build: {
      emptyOutDir: true,
      outDir: "../dist",
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      watch: {
        usePolling: true,
      },
    },
    plugins: [vue()],
  };

  if (command === "build")
    setting.base = "https://ergrei.github.io/Quiz_Vue/";

  return setting;
});

