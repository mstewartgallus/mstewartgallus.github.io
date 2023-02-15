import * as React from "react";
import Layout from "../../src/components/layout.jsx";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
