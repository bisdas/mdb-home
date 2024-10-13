import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babelMacros from 'vite-plugin-babel-macros';

export default defineConfig({
    plugins: [react(), babelMacros()],
    resolve: {
        alias: {
            src: '/src',
        },
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: true,
        target: 'esnext',
    },
    base: process.env.PUBLIC_URL,
    server: {
        host: 'localhost',
        port: 4000,
        strictPort: true,
        open: 'http://localhost:4000/',
    },
});
