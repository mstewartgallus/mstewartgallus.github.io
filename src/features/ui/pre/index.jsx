import { pre as preClass } from "./pre.module.css";

export const Pre = ({children, ...props}) => {
    return <pre className={preClass} {...props}>
               {children}
           </pre>;
};

export default Pre;
