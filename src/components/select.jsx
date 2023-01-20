import * as React from "react";
import { select } from "./select.module.css";

export const SelectContext = React.createContext(null);

export const Select = ({ name, children }) => {
    return <fieldset className={select}>
               <SelectContext.Provider value={name}>
                   {children}
               </SelectContext.Provider>
           </fieldset>;
};

export default Select;
