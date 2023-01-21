import * as React from "react";
import Layout from "./src/components/layout.jsx";
import Root from "./src/components/root.jsx";

export const wrapRootElement = ({ element }) =>
<Root>{element}</Root>;

export const wrapPageElement = ({ element, props }) =>
<Layout {...props}>{element}</Layout>;
