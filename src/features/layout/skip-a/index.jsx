import { useEffect, useRef } from "react";
import { useFocus } from "../../../features/util";
import { A } from "../../../features/ui";
import { wrapper, skipLink } from "./skip-a.module.css";

const options = {
    preventScroll: true,
    focusVisible: true
};

export const SkipA = ({children, ...props}) => {
    const ref = useRef();
    const focus = useFocus();
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const elem = window.document.getElementById(hash.slice(1));
            if (!elem) {
                return;
            }
            elem.focus({ focusVisible: true });
        } else {
            const elem = ref.current;
            if (!elem) {
                return;
            }
            elem.focus(options);
        }
    }, []);
    // Fix space hack
    return <div className={wrapper}>
               <A ref={focus ? ref : null} className={skipLink} {...props}>{children}</A>
               <span aria-hidden="true">&emsp;</span>
           </div>;
};
