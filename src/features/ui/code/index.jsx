import { code as codeClass } from "./code.module.css";

export const Code = ({children, ...props}) => {
    return <code className={codeClass} {...props}>
               {children}
           </code>;
};

export default Code;
