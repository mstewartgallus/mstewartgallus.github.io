import { useEffect } from "react";
import { prefetchPathname } from "gatsby";

export const usePrefetchPathname = url => useEffect(() => {
    if (!url) {
        return;
    }
    const abort = prefetchPathname(url);
    return () => abort.abort();
}, [url]);
