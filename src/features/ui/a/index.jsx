import { lazy, forwardRef } from "react";
import { useClient } from "@features/util";
import { a as aClass } from "./a.module.css";

const AClient = lazy(() => import("../a-client"));

// FIXME only lazy load the prefetch logic, not the navigate logic
const A = ({children, className = '', ...props}, ref) => {
    const client = useClient();
    className = `${aClass} ${className}`;
    return client ?
        <AClient className={className}
                 {...props} ref={ref}>{children}</AClient> :
    <a className={className}
       {...props} ref={ref}>{children}</a> ;
};

const ARef = forwardRef(A);

export { ARef as A, ARef as default };
