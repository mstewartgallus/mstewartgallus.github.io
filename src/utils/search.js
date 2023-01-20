export const search = (...xs) => {
    const p = new URLSearchParams(xs);
    return `/search?${p}`;
};
