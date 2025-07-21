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
    icons: [32, 192, 512].map(size => ({
        src: `/icon/icon-${size}x${size}.png`,
        sizes: `${size}x${size}`,
        type: 'image/png'
    }))
});

export default manifest;
