
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // Add mainFields to prioritize module resolution
    mainFields: ['module', 'jsnext:main', 'jsnext', 'main'],
  },
  build: {
    sourcemap: mode !== 'production',
    minify: mode === 'production',
    // Increase the warning limit for large chunks
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          // Important: Use individual component imports instead of directory
          ui: ['@/components/ui/button', '@/components/ui/toast', '@/components/ui/toaster'],
          pdf: ['react-pdf', 'pdfjs-dist'],
        },
      },
    },
    // Add rollup specific options
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  // Add optimizeDeps to better handle problematic dependencies
  optimizeDeps: {
    include: ['react-pdf', 'pdfjs-dist'],
    exclude: [],
  }
}));
