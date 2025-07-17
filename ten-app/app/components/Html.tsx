"use client";

import type {
    DetailedHTMLProps, HtmlHTMLAttributes, MouseEventHandler
} from "react";
import type { Hook } from "@/lib/features/html/htmlSlice";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";
import {
    addHook, removeHook,
    selectOnMouseUp, selectOnMouseLeave
} from "@/lib/features/html/htmlSlice";

type Props = DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>;

const useHook = (hook?: Hook) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!hook) {
            return;
        }
        dispatch(addHook(hook));
        return () => {
            dispatch(removeHook(hook));
        };
    }, [hook, dispatch]);
};

export const useMouseUp = (handler?: MouseEventHandler<HTMLHtmlElement>) =>
    useHook(handler && { type: 'mouseup', value: handler });
export const useMouseLeave = (handler?: MouseEventHandler<HTMLHtmlElement>) =>
    useHook(handler && { type: 'mouseleave', value: handler });

// MouseEventHandler<HTMLHtmlElement>
export const Html = ({ children, ...props }: Props) => {
    const onMouseUp = useAppSelector(selectOnMouseUp);
    const onMouseLeave = useAppSelector(selectOnMouseLeave);

    return <html onMouseUp={onMouseUp} onMouseLeave={onMouseLeave} {...props}>
           {children}
        </html>;
};
