import {
    useRef, useImperativeHandle
} from "react";
import { focusRef } from "@features/focus";
import { Menu, MenuA } from "../menu";

export const OutlineItem = MenuA;

export const Outline = ({children, content}) => {
    const ref = useRef();
    useImperativeHandle(focusRef, () => ({
        focus(opts) {
            ref.current.click();
        }
    }), []);

    return <Menu
               id="outline"
               ref={ref}
               label="Outline">
               {children}
           </Menu>;
};
