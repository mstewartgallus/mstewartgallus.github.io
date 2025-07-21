import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const manifest: () => MetadataRoute.Manifest = () => ({
    name: 'Ten Things',
    short_name: 'Ten',
    description: 'A minimalist todo list app',
    start_url: '/ten',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#00FFFF',
    icons: [
        {
            src: '/icon/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
        },
        {
            src: '/icon/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
        },
    ]
});

export default manifest;
