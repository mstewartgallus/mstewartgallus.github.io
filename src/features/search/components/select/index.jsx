import * as React from "react";
import { select, option, optionLabel } from "./select.module.css";

const SelectContext = React.createContext(null);

export const Select = ({ name, children, onChange }) =>
<fieldset className={select} onChange={onChange}>
    <SelectContext.Provider value={name}>
        {children}
    </SelectContext.Provider>
</fieldset>;

export const Option = ({ children, onChange, selected, value }) => {
    const id = React.useId();
    const name = React.useContext(SelectContext);

    return <div className={option}>
               <input id={id}
                      type="checkbox" name={name} value={value}
                      onChange={onChange}
                      checked={selected}
               />
               <label className={optionLabel} htmlFor={id}>{children}</label>
           </div>;
};
