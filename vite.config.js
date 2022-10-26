import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/assets/scss/style-rtl.scss',
                'resources/assets/scss/style.scss',
                'resources/scss/base/custom-rtl.scss',
                'resources/scss/base/themes/bordered-layout.scss',
                'resources/scss/base/themes/dark-layout.scss',
                'resources/scss/base/themes/semi-dark-layout.scss',
                'resources/scss/core.scss',
                'resources/scss/overrides.scss',
                'resources/assets/js/scripts.js',
                'resources/js/core/app-menu.js',
                'resources/js/core/app.js',
            ],
            refresh: true,
        }),
    ],
});
