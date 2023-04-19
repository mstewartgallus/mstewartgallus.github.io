import { useState } from "react";

// FIXME this seems wrong
export const usePrevious = value => {
    const [{ copy, prev }, setState] = useState({ copy: value, prev: value });
    if (value !== copy) {
        setState({ copy: value, prev: copy });
    }
    return prev;
};

export const useChanged = value => {
    const prev = usePrevious(value);
    return prev !== value;
};
