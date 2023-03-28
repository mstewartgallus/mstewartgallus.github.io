import { sr } from "./assistive.module.css";

export const Assistive = ({children}) => {
    return <div className={sr}>{children}</div>;
};

export default Assistive;
