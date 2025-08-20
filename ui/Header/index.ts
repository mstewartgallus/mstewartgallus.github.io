import type { JSX } from "react";
import { withClass } from "@/features/util";

type Props = JSX.IntrinsicElements["body"];

import styles from "./header.module.css";

export default withClass<Props>('header', styles.header);
