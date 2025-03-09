import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { visualizer } from "rollup-plugin-visualizer"
import { fileURLToPath } from "url"
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: false,
      gzipSize: true
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {

          if (id.includes("node_modules")) return "react"
          if (id.includes("src/components/")) return "components"
          if (id.includes("src/modules/")) return "modules"
          if (id.includes("src/shared/")) return "shared"

          return null
        }
      }
    }
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@shared": path.resolve(__dirname, "src/shared"),
    }
  }
})
