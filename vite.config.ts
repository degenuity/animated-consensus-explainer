
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
    react(), // Using default react plugin settings
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
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['@radix-ui/react-toast', '@radix-ui/react-slot'],
          'vendor-framer': ['framer-motion'],
          'vendor-lucide': ['lucide-react'],
          'vendor-pdf': ['react-pdf', 'pdfjs-dist'],
          'vendor-charts': ['recharts'],
        }
      },
    },
    // Improve commonjs handling
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'react-pdf', 
      'pdfjs-dist', 
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
  },
  // Set reasonable performance budgets
  performance: {
    hints: mode === 'production' ? 'warning' : false
  },
  // Important: set this to ensure faster builds
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none',
    target: ['es2020']
  }
}));
