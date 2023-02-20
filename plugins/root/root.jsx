import * as React from "react";
// eslint-disable-next-line
import Root from "gatsby-plugin-root/root";

export const wrapRootElement = ({ element, props }) => {
    return <Root {...props}>{element}</Root>;
};
