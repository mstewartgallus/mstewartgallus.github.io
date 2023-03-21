import { createContext, useId, useContext } from "react";
import { dl, dt, dd } from "./desc-list.module.css";

const DescContext = createContext(null);

export const DescList = ({desc, children}) => {
    const id = useId();
    return <dl className={dl}>
               <dt className={dt} id={id}>{desc}</dt>
               <DescContext.Provider value={id}>
                   {children}
               </DescContext.Provider>
           </dl>;
};

export const DescItem = ({children}) => {
    const id = useContext(DescContext);
    return <dd className={dd} aria-describedby={id}>{children}</dd>;
};
