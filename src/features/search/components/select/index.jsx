import { createContext, useId, useContext } from "react";
import { select, option, optionLabel } from "./select.module.css";

const SelectContext = createContext(null);

export const Select = ({ name, children, onChange }) =>
<fieldset className={select} onChange={onChange}>
    <SelectContext.Provider value={name}>
        {children}
    </SelectContext.Provider>
</fieldset>;

export const Option = ({ children, onChange, selected, value }) => {
    const id = useId();
    const name = useContext(SelectContext);

    return <div className={option}>
               <input id={id}
                      type="checkbox" name={name} value={value}
                      onChange={onChange}
                      checked={selected}
               />
               <label className={optionLabel} htmlFor={id}>{children}</label>
           </div>;
};
