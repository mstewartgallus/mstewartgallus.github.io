"use client";

import type {
    DetailedHTMLProps, HtmlHTMLAttributes, MouseEventHandler
} from "react";
import type { Hook, Cursor } from "@/lib/features/html/htmlSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import {
    addHook, removeHook, cursor,
    selectOnMouseUp, selectOnMouseLeave, selectCursor
} from "@/lib/features/html/htmlSlice";

import styles from "./Html.module.css";

const useHook = <T extends Hook>(type: T["type"], value?: T["value"]) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!value) {
            return;
        }
        const hook: Hook = { type, value };
        dispatch(addHook(hook));
        return () => {
            dispatch(removeHook(hook));
        };
    }, [type, value, dispatch]);
};

export const useCursor = (value?: Cursor) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!value) {
            return;
        }
        // FIXME do a push and pop thing
        dispatch(cursor(value));
        return () => {
            dispatch(cursor());
        };
    }, [value, dispatch]);
};

export const useMouseUp = (handler?: MouseEventHandler<HTMLHtmlElement>) =>
    useHook('mouseup',  handler);
export const useMouseLeave = (handler?: MouseEventHandler<HTMLHtmlElement>) =>
    useHook('mouseleave', handler);

type Props = DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

export const Html = ({ children, ...props }: Props) => {
    const onMouseUp = useAppSelector(selectOnMouseUp);
    const onMouseLeave = useAppSelector(selectOnMouseLeave);
    const cursor = useAppSelector(selectCursor);

    return <html className={styles.html}
        onMouseUp={onMouseUp} onMouseLeave={onMouseLeave}
        data-cursor={cursor} {...props}>
           {children}
        </html>;
};
