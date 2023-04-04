import { useEffect, useRef } from "react";
import { getPrevLocation, useUnder } from "../../../features/util";
import { A } from "../../../features/ui";
import { wrapper, skipLink } from "./skip-a.module.css";

const options = {
    preventScroll: true,
    focusVisible: true
};

export const SkipA = ({children, ...props}) => {
    const ref = useRef();
    const under = useUnder();
    useEffect(() => {
        const prev = getPrevLocation();
        if (!prev) {
            return;
        }

        const { hash } = window.location;
        if (hash) {
            const elem = window.document.getElementById(hash.slice(1));
            if (!elem) {
                return;
            }
            elem.focus({ focusVisible: true });
            return;
        }

        const elem = ref.current;
        if (!elem) {
            return;
        }
        elem.focus(options);
    }, []);
    // Fix space hack
    return <div className={wrapper}>
               <A ref={under ? null : ref} className={skipLink} {...props}>{children}</A>
               <span aria-hidden="true">&emsp;</span>
           </div>;
};
