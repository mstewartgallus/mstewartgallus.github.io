import { withClass } from "@features/util";
import { heading, heading1, heading2 } from "./heading.module.css";

export const H1 = withClass('h1', heading1);
export const H2 = withClass('h2', heading2);
export const H3 = withClass('h3', heading);
export const H4 = withClass('h4', heading);
export const H5 = withClass('h5', heading);
export const H6 = withClass('h6', heading);
