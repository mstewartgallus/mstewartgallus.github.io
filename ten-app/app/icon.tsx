/* eslint no-unused-vars: 0 */

import { ImageResponse } from 'next/og';
import { Logo } from './components/Logo';

export const dynamic = 'force-static';

interface Meta {
    size: {
        width: number;
        height: number;
    };
}

const images: Record<string, Meta> = {
    'icon-32x32.png': { size: { width: 32, height: 32 } },
    'icon-192x192.png': { size: { width: 192, height: 192 } },
    'icon-512x512.png': { size: { width: 512, height: 512 } }
};

export const generateStaticParams = async () =>
    Object.keys(images).map(id => ({ __metadata_id__: id }));

export const generateImageMetadata = () =>
    Object.entries(images).map(([id, { size }]) =>
        ({
            id,
            size,
            contentType: 'image/png'
        }));

const Icon = ({ id }: { id: string }) =>
    new ImageResponse(<Logo />, images[id].size);

export default Icon;
