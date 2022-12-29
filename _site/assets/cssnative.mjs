export default async function css(url, base) {
    url = new URL(url, base);
    return (await import(url, { assert: { type: 'css' } })).default;
}
