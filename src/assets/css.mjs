const nativeimp = import('./cssnative.mjs');

let nativecss;
try {
    nativecss = await nativeimp;
} catch (e) {
}

export const css = nativecss?.default ?? (await import('./cssfallback.mjs')).default;
export default css;
