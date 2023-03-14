import * as React from "react";
import { dl, dt, dd } from "./desc-list.module.css";

const DescContext = React.createContext(null);

export const DescList = ({desc, children}) => {
    const id = React.useId();
    return <dl className={dl}>
               <dt className={dt} id={id}>{desc}</dt>
               <DescContext.Provider value={id}>
                   {children}
               </DescContext.Provider>
           </dl>;
};

export const DescItem = ({children}) => {
    const id = React.useContext(DescContext);
    return <dd className={dd} aria-describedby={id}>{children}</dd>;
};

export default DescList;
