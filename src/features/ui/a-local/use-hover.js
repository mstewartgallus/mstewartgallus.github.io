import { useEffect } from "react";

export const useHover = url => useEffect(() => {
    if (!url) {
        return;
    }
    window.___loader.hovering(url);
}, [url]);
