import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Lightbox into its own chunk
          lightbox: ["yet-another-react-lightbox", "yet-another-react-lightbox/plugins/zoom"],
        },
      },
    },
  },
  // Optional: increase chunk size warning limit if you want
  chunkSizeWarningLimit: 600,
});
