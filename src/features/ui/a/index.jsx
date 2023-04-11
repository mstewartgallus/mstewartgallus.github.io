import { Suspense, lazy, forwardRef } from "react";
import { a as aClass } from "./a.module.css";

const AClient = lazy(() => import("../a-client"));

// FIXME only lazy load the prefetch logic, not the navigate logic
const A = ({children, className = '', ...props}, ref) => {
    className = `${aClass} ${className}`;
    return <Suspense
               fallback={
                   <a className={className} {...props} ref={ref}>
                       {children}
                   </a>
               }
           >
               <AClient className={className}
                        {...props} ref={ref}>{children}</AClient>
           </Suspense>;
};

const ARef = forwardRef(A);

export { ARef as A, ARef as default };
