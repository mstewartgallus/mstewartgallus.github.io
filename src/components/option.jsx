import * as React from "react";
import { option } from "./option.module.css";
import { SelectContext } from "./select.jsx";

export const Option = ({ children, onChange, selected, value }) => {
    const id = React.useId();
    const name = React.useContext(SelectContext);
    const [getSelected, setSelected] = React.useState(selected);

    const onChangeHook = (event) => {
        setSelected(event.target.checked);
        // FIXME
        onChange(event);
    };

    return <div className={option}>
               <input id={id}
                      type="checkbox" name={name} value={value}
                      onChange={onChangeHook}
                      checked={getSelected ?? false}
               />
               <label htmlFor={id}>{children}</label>
           </div>;
};

export default Option;
