import { forwardRef } from "react";
import { ul } from "./ul.module.css";

export const Ul = forwardRef((props, ref) =>
    <ul role="list" className={ul} {...props} ref={ref} />);
Ul.displayName = `Ul`;
