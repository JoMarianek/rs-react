import { defineConfig } from 'vitest/config'
import { resolve } from 'path';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: 'tests/setup.ts',
        include: ['tests/**/*.test.tsx', 'tests/**/*.test.ts']
    },
    resolve: {
        alias: [{
            find: '@', replacement: resolve(__dirname, './src/')
        }]
      }
})
