
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { Plugin } from 'vite';

// Plugin para copiar index.html como 404.html na build
function spa404Plugin(): Plugin {
  return {
    name: 'spa-404-copy',
    closeBundle: async () => {
      const fs = await import('fs/promises');
      try {
        await fs.copyFile('dist/index.html', 'dist/404.html');
      } catch (e) {
        // ignora se não existir
      }
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/gymbuddy-ai/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), componentTagger(), spa404Plugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // build padrão, Vite já copia favicon de public/
});
