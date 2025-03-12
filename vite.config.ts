
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
    react({
      // Add fast refresh options
      fastRefresh: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    mainFields: ['module', 'jsnext:main', 'jsnext', 'main'],
  },
  build: {
    sourcemap: mode !== 'production',
    minify: mode === 'production',
    chunkSizeWarningLimit: 2000,
    // Optimize CSS
    cssCodeSplit: true,
    // Add terser options for better minification
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production'
      }
    },
    rollupOptions: {
      output: {
        // Use deterministic chunk names
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Optimize chunks for better caching
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            } else if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            } else if (id.includes('framer-motion')) {
              return 'vendor-framer';
            } else if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            } else if (id.includes('recharts') || id.includes('d3')) {
              return 'vendor-charts';
            } else if (id.includes('react-pdf') || id.includes('pdfjs-dist')) {
              return 'vendor-pdf';
            }
            return 'vendor-other';
          }
          // Split app code by feature area
          if (id.includes('/components/consensus/')) {
            return 'feature-consensus';
          }
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
        }
      },
    },
    // Improve commonjs handling
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  // Add optimizeDeps for better dependency optimization
  optimizeDeps: {
    include: [
      'react-pdf', 
      'pdfjs-dist', 
      'framer-motion',
      'react-router-dom',
      'recharts'
    ],
    exclude: [],
    esbuildOptions: {
      target: 'es2020'
    }
  },
  // Add better CSS handling
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      // Add any preprocessor options if needed
    }
  }
}));
