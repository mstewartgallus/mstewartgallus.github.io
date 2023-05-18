import { useRef, useEffect, useState, useTransition } from "react";
import { Context } from "../context.js";
import { announcer } from "./route-announcer.module.css";

const { Provider } = Context;

export const RouteAnnouncer = ({children}) => {
    const [, startTransition] = useTransition();
    const [elem, setElem] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        const { current } = ref;
        startTransition(() => setElem(current));
    }, []);

    return <>
               <Provider value={elem}>
                   {children}
               </Provider>
               <output
                   aria-live="assertive"
                   aria-atomic="true"
                   className={announcer}
                   ref={ref}
               />
           </>;
};
