import { withClass } from "@features/util";
import { abbr } from "./abbr.module.css";

// abbr is kind of useless for accessibility purposes
// I mostly use it for styling purposes.
// Consider using a span instead *shrug*.
export const Abbr = withClass('abbr', abbr);
