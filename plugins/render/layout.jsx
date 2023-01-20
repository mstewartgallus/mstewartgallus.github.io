import * as React from "react";
import Layout from "../../src/components/layout.jsx";
import Root from "../../src/components/root.jsx";

export const wrapRootElement = ({ element }) => {
    return <Root>{element}</Root>;
};

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
