import { readFileSync } from 'fs';

// We might also consider preloading 'polyfill' but it isn't always used
const chunkNames = ['app', 'commons'];

export const onRenderBody = ({
    pathname,
    setHeadComponents
}) => {
    // Not sure how to make compatible with incremental builds
    const { assetsByChunkName } = JSON.parse(readFileSync('./public/webpack.stats.json'));

    const chunks = chunkNames.flatMap(name => assetsByChunkName[name] ?? []);
    const scripts = chunks.filter(name => name.endsWith('.js'));

    let p = pathname;
    if (p === '/') {
        p = '/index/';
    }

    const appData =
        <link rel="preload" href="/page-data/app-data.json" as="fetch" crossOrigin="anonymous" />;

    const pageData =
        <link
            rel="preload"
            href={`/page-data${p}page-data.json`}
            as="fetch"
            crossOrigin="anonymous" />;

    const scriptPreload = scripts.map(href =>
        <link rel="preload" href={`/${href}`} as="script"  />);

    setHeadComponents([...scriptPreload, appData, pageData]);
};
