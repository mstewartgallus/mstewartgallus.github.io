import { useState } from "react";
import { ScrollProvider } from "@features/root-scroller";

export const PerLocation = ({children, pathname}) => {
    const [paths, setPaths] = useState([]);

    if (!paths.includes(pathname)) {
        setPaths(p => [pathname, ...p]);
    }

    return paths.map(path =>
        <ScrollProvider key={path}>
            {
                path === pathname && children
            }
        </ScrollProvider>);
};
