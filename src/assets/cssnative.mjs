export default async function css(url) {
    return (await import(url, { assert: { type: 'css' } })).default;
}
