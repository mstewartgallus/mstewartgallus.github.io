import * as React from "react";
import Layout from "gatsby-plugin-layout/layout";

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
