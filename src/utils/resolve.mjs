import * as url from 'url';
import * as path from 'path';

export const mkResolve = meta => {
    const metaUrl = url.pathToFileURL(path.resolve(url.fileURLToPath(meta.url)));
    return path => url.fileURLToPath(new URL(path, metaUrl));
};
