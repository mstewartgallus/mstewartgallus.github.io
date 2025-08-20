import type { JSX } from "react";
import { withClass } from "@/features/util";

type Props = JSX.IntrinsicElements["blockquote"];

import styles from "./blockquote.module.css";

export default withClass<Props>('blockquote', styles.blockquote);
