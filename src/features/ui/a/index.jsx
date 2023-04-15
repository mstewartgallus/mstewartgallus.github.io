import { forwardRef } from "react";
import { A as UtilA } from "@features/util";
import { a as aClass } from "./a.module.css";

export const A = forwardRef(function A(props, ref) {
    const className = [aClass, props.className ?? ''].join(' ');
    return <UtilA {...props} className={className} ref={ref} />;
});

export default A;
