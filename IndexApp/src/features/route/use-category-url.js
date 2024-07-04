import { useMemo } from 'react';
import { withPrefix } from "gatsby";

export const useCategoryURL = category => {
    return useMemo(() => {
        return withPrefix("/blog/#" + category);
    }, [category]);
};
