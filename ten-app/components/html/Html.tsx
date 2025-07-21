"use client";

import type {
    DetailedHTMLProps, HtmlHTMLAttributes, PointerEvent
} from "react";

import { createContext, useCallback, useContext, useMemo, useEffect, useState } from "react";

import styles from "./Html.module.css";

export type Cursor = 'grabbing';


interface HtmlContext {
    setCursor: (cursor?: Cursor) => void;
    isPrimaryPointerDown: boolean;
}

const HtmlContext = createContext<HtmlContext>({
    setCursor: () => {},
    isPrimaryPointerDown: false
});


export const useCursor = (value?: Cursor) => {
    const { setCursor } = useContext(HtmlContext);

    useEffect(() => {
        if (!value) {
            return;
        }
        // FIXME do a push and pop thing
        setCursor(value);
        return () => {
            setCursor();
        };
    }, [value, setCursor]);
};

export const useIsPrimaryPointerDown = () => useContext(HtmlContext).isPrimaryPointerDown;

type Props = DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

export const Html = ({ children, ...props }: Props) => {
    const [isPrimaryPointerDown, setIsPrimaryPointerDown] = useState(false);
    const [cursor, setCursor] = useState<Cursor | null>(null);

    const onPointerDown = useCallback((e: PointerEvent<HTMLHtmlElement>) => {
        if (!e.isPrimary) {
            return;
        }
        setIsPrimaryPointerDown(true);
    }, []);
    const onPointerUp = useCallback((e: PointerEvent<HTMLHtmlElement>) => {
        if (!e.isPrimary) {
            return;
        }
        setIsPrimaryPointerDown(false);
    }, []);

    const context = useMemo(() => ({
        isPrimaryPointerDown,
        setCursor: (cursor?: Cursor) => setCursor(cursor || null)
    }), [setCursor, isPrimaryPointerDown]);
    return <html className={styles.html}
        onPointerUp={onPointerUp}
        onPointerDown={onPointerDown} onPointerLeave={onPointerDown}
    data-cursor={cursor} {...props}>
           <HtmlContext.Provider value={context}>
              {children}
           </HtmlContext.Provider>
        </html>;
};
