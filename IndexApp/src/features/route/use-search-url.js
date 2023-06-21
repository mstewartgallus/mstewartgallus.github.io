import { useMemo } from 'react';
import { withPrefix } from "gatsby";

const path = "/search";

const lb = (label, xs = []) => xs.map(x => [label, x]);

export const useSearchURL = xs => {
    const {s, category, tag, place, person} = xs ?? {};
    return useMemo(() => {
        const opts = [
            ...(s ? ['s', s] : []),
            ...lb('category', category),
            ...lb('tag', tag),
            ...lb('place', place),
            ...lb('person', person)
        ];

        const p = String(new URLSearchParams(opts));
        const y =  p === '' ? path : `${path}?${p}` ;
        return withPrefix(y);
    }, [s, category, tag, place, person]);
};
