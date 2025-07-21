import type { PointerEvent } from "react";
import { useCallback, useMemo, useState } from "react";

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

    const onPointerEnter = useCallback(() => setHover(true), []);
    const onPointerLeave = useCallback(() => setHover(false), []);

    const onPointerDown = useCallback((e: PointerEvent) => {
        if (!e.isPrimary) {
            return;
        }
        setActive(true);
    }, []);
    const onPointerUp = useCallback((e: PointerEvent) => {
        if (!e.isPrimary) {
            return;
        }
        setActive(false);
    }, []);

    const state = useMemo(() => ({
        hover, active
    }), [hover, active]);

    const hooks = useMemo(() => ({
        onPointerEnter, onPointerLeave,
        onPointerUp, onPointerDown
    }), [onPointerEnter, onPointerLeave, onPointerUp, onPointerDown]);

    return { state, hooks } ;
};
