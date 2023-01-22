import * as React from "react";
import { green } from "./green.module.css";

export const Green = ({ children }) =>
<ul className={green}>{children}</ul>;

export default Green;
