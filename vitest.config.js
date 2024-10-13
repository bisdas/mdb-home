/// <reference types="vitest" />

import { defineConfig } from 'vite';
import babelMacros from 'vite-plugin-babel-macros';

export default defineConfig({
    plugins: [babelMacros()],
    resolve: {
        alias: {
            src: '/src',
        },
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./setupTests.ts'],
        coverage: {
            provider: 'v8',
            thresholds: {
                lines: 30,
                functions: 30,
                branches: 30,
                statements: 30,
            },
        },
        include: ['src/**/*.test.{ts,tsx}'],
        exclude: [],
    },
});
