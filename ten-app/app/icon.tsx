import { ImageResponse } from 'next/og';
import { Logo } from './components/Logo';

export const dynamic = 'force-static';

interface Meta {
    size: number;
}

const images: Record<string, Meta> = {
    'icon-32x32.png': { size: 32 },
    'icon-192x192.png': { size: 192 },
    'icon-512x512.png': { size: 512 }
};

export const generateStaticParams = async () =>
    Object.keys(images).map(id => ({ __metadata_id__: id }));

export const generateImageMetadata = () =>
    Object.entries(images).map(([id, { size }]) =>
        ({
            id,
            size: { width: size, height: size },
            contentType: 'image/png'
        }));

const Icon = ({ id }: { id: string }) => {
    const { size } = images[id];
    return new ImageResponse(<Logo size={size} />, { width: size, height: size });
};

export default Icon;
