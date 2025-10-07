// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: 'Game Dev Book',
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/omundy/game-dev-book' }],
            sidebar: [
                {
                    label: 'Home', link: './'
                },
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Game UI', slug: 'guides/ui' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});
