var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkGfm from 'remark-gfm';
import path from 'node:path';
export default defineConfig({
    base: '/',
    plugins: [
        __assign({ enforce: 'pre' }, mdx({
            include: [/\.mdx$/, /remote-sensing-benchmark-formatted\.md$/],
            remarkPlugins: [
                remarkFrontmatter,
                [remarkMdxFrontmatter, { name: 'frontmatter' }],
                remarkGfm,
            ],
            providerImportSource: '@mdx-js/react',
        })),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@content': path.resolve(__dirname, 'content'),
        },
    },
    build: {
        outDir: 'docs',
        target: 'es2020',
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                    motion: ['framer-motion'],
                },
            },
        },
    },
});
