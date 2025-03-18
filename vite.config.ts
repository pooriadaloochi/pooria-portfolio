import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@config": path.resolve(__dirname, "src/lib/config/"),
      "@context": path.resolve(__dirname, "src/lib/context/"),
      "@helper": path.resolve(__dirname, "src/lib/helper/"),
      "@hooks": path.resolve(__dirname, "src/lib/hooks/"),
      "@locales": path.resolve(__dirname, "src/lib/locales/"),
      "@models": path.resolve(__dirname, "src/lib/models/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@theme": path.resolve(__dirname, "src/lib/theme/"),
      "@types": path.resolve(__dirname, "src/lib/types/"),
    },
  },
});
