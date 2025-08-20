import styles from "./abbr.module.css";

import { elementWithClass } from "@/features/util";

// abbr is kind of useless for accessibility purposes
// I mostly use it for styling purposes.
// Consider using a span instead *shrug*.
export default elementWithClass('abbr', styles.abbr);
