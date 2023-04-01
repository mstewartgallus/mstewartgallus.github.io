import { pre as preClass } from "./pre.module.css";

export const Pre = ({children, className = '', ...props}) => {
    return <pre className={`${preClass} ${className}`} {...props}>
               {children}
           </pre>;
};

export default Pre;
