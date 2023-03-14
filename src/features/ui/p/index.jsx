import { p as pClass } from "./p.module.css";

export const P = ({children, ...props}) => {
    return <p className={pClass} {...props}>
               {children}
           </p>;
};

export default P;
