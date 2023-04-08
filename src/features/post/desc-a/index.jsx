import { useRef, useId, forwardRef, useCallback } from "react";
import { A } from "../../../features/ui";
import { label } from "./desc.module.css";

const DescA = ({ children, desc, ...props }, ref) => {
    const theRef = useRef();
    const id = useId();
    if (!ref) {
        ref = theRef;
    }

    const onFocus = useCallback(e => {
        ref.current.focus({preventScroll:true, focusVisible: true});
    }, [ref]);
    const onClick = useCallback(e => {
        // Just punt on onClick events that we don't know how to handle
        if (e.button !== 0 || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
            return;
        }

        e.preventDefault();

        ref.current.click();
    }, [ref]);

    return <div role="presentation">
               <A aria-describedby={id} ref={ref} {...props}>
                   {children}
               </A>
               &emsp;
               <span tabIndex="-1"
                     className={label}
                     id={id}
                     onFocus={onFocus}
                     onClick={onClick}>
                   {desc}
               </span>
           </div>;
};

const DescARef = forwardRef(DescA);

export { DescARef as DescA, DescARef as default };
