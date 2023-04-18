import { forwardRef } from "react";
import { A as UtilA } from "@features/util";
import { a as aClass } from "./a.module.css";

const A = (props, ref) => {
    const className = [aClass, props.className ?? ''].join(' ');
    return <UtilA {...props} className={className} ref={ref} />;
};

const ARef = forwardRef(A);

export { ARef as A, ARef as default };
