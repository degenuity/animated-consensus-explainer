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
      // Use correct options format for react-swc plugin
      plugins: [
        [
          '@swc/plugin-transform-react-jsx',
          {
            runtime: 'automatic',
            development: mode !== 'production',
            refresh: mode === 'development',
          }
        ]
      ]
    }),
    mode === 'development' && componentTagger(),
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
    rollupOptions: {
      output: {
        // Use deterministic chunk names
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        // Improve chunking strategy for better caching
        manualChunks: (id) => {
          // Core React functionality
          if (id.includes('node_modules/react/') || 
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/scheduler/')) {
            return 'vendor-react-core';
          }
          
          // React router
          if (id.includes('node_modules/react-router') || 
              id.includes('node_modules/@remix-run')) {
            return 'vendor-router';
          }
          
          // UI components
          if (id.includes('node_modules/@radix-ui/')) {
            return 'vendor-ui';
          }
          
          // Animation libraries
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-framer';
          }
          
          // Icons
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-lucide';
          }
          
          // PDF related
          if (id.includes('node_modules/react-pdf/') || 
              id.includes('node_modules/pdfjs-dist/')) {
            return 'vendor-pdf';
          }
          
          // Charts
          if (id.includes('node_modules/recharts/')) {
            return 'vendor-charts';
          }
          
          // Keep BLS related components in a separate chunk
          if (id.includes('/components/consensus/bls/')) {
            return 'feature-bls';
          }
          
          // VRF related code
          if (id.includes('/components/consensus/vrf/')) {
            return 'feature-vrf';
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
  // Optimize dependency pre-bundling with more specific settings
  optimizeDeps: {
    include: [
      'react', 
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react',
      'recharts',
      '@radix-ui/react-toast'
    ],
    exclude: [],
    esbuildOptions: {
      target: 'es2020',
      splitting: true,
      minify: true,
      legalComments: 'none'
    }
  },
  // Add better CSS handling
  css: {
    devSourcemap: true,
    modules: {
      scopeBehaviour: 'local'
    }
  },
  // Important: set this to ensure faster builds
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    legalComments: 'none',
    target: ['es2020'],
    treeShaking: true
  }
}));
