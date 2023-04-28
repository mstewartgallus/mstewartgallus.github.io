import { useEffect } from "react";

export const useHovering = url => useEffect(() => {
    if (!url) {
        return;
    }
    window.___loader.hovering(url);
}, [url]);
