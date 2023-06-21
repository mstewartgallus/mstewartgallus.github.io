import { useOrigin } from "./use-origin.js";

export const useLocal = ({ href, target, download }) => {
    const siteUrl = useOrigin();
    if (!href || target || download) {
        return null;
    }
    const { origin, pathname, hash, search } = new URL(href, siteUrl);
    if (origin !== siteUrl) {
        return null;
    }
    if (hash) {
        return null;
    }
    return `${pathname}${search}${hash}`;
};
