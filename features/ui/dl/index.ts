import { withClass } from "@/features/util";
import styles from "./dl.module.css";
import type { JSX } from "react";

export const Dl = withClass<JSX.IntrinsicElements["dl"]>('dl', styles.dl);
export const DlDiv = withClass<JSX.IntrinsicElements["div"]>('div', styles.div);
export const Dt = withClass<JSX.IntrinsicElements["dt"]>('dt', styles.dt);
export const Dd = withClass<JSX.IntrinsicElements["dd"]>('dd', styles.dd);
