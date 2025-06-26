/// <reference types="vitest" />
import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    root: "./src",
    reporters: ["verbose"],
    setupFiles: ["./test/setup-vitest.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
      include: ["src/**/*"],
      exclude: [],
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
