import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  base:"./",
>>>>>>> 43f7032e93b4a728740f50ffe4c5e915dd433fbe
  build: {
    outDir: "./build",
  },
});
