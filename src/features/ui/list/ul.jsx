import { forwardRef } from "react";
import { unorderedList } from "./list.module.css";

export const Ul = forwardRef((props, ref) =>
    <ul role="list" className={unorderedList} {...props} ref={ref} />);
Ul.displayName = `Ul`;
