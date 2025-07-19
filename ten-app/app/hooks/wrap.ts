import type { MouseEvent } from "react";
import {  useCallback, useMemo, useState } from "react";

interface Wrap {
    hover: boolean;
    active: boolean;
}

interface DataProps {
    "data-hover"?: string;
    "data-active"?: string;
}

export const toDataProps: (props: Wrap) => DataProps = ({ hover, active }) => ({
    "data-hover": hover ? "data-hover" : undefined,
    "data-active": active ? "data-active" : undefined
});

export const useWrap = () => {
    const [hover, setHover] = useState(false);
    const [active, setActive] = useState(false);

    if (!hover && active) {
        setActive(false);
    }

    const onMouseEnter = useCallback(() => setHover(true), []);
    const onMouseLeave = useCallback(() => setHover(false), []);

    const onMouseDown = useCallback((e: MouseEvent) => {
        if (e.button !== 0) {
            return;
        }
        setActive(true);
    }, []);
    const onMouseUp = useCallback((e: MouseEvent) => {
        if (e.button !== 0) {
            return;
        }
        setActive(false);
    }, []);

    const state = useMemo(() => ({
        hover, active
    }), [hover, active]);

    const hooks = useMemo(() => ({
        onMouseEnter, onMouseLeave,
        onMouseUp, onMouseDown
    }), [onMouseEnter, onMouseLeave, onMouseUp, onMouseDown]);

    return { state, hooks } ;
};
