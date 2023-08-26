import { useContext } from "react";
import { LgContext, LContext } from "../lg-context.js";
import { l } from "./l.module.css";

const Br = ({index}) => {
    const count = useContext(LgContext);
    const theIndex = useContext(LContext);
    index ??= theIndex;
    const last = index + 1 >= count;
    return last ? null : <br />;
};

// FIXME rm last break
export const L = ({ children, index }) =>
<>
    <span role="presentation" className={l}>
        {children}
    </span>
    <Br index={index} />
</>;
