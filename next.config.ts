import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH,
    productionBrowserSourceMaps: true,
    images: {
        unoptimized: true
    }
};

const withMDX = createMDX({
    options: {
        remarkPlugins: []
    }
});

export default withMDX(nextConfig);
