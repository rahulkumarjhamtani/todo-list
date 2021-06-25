import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from "path";
import glob from "glob";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  

  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: glob.sync(path.resolve(__dirname, "src", "*.html")),
    },
  },
})
