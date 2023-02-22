import * as React from "react";

export const createUseIndex = async name => {
    const index = await import(`gatsby-plugin-index/index/${name}.js`);

    const useIndex = path => {
        const Component = React.useMemo(() => {
            const Component = index[path];
            return Component;
        }, [path]);
        return Component;
    };

    return useIndex;
};

export default createUseIndex;
