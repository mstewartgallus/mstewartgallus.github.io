import * as React from "react";
import Layout from "gatsby-plugin-layout/layout";

const ref = { current: null };

export const onPreRouteUpdate = (...args) => {
    ref.current?.onPreRouteUpdate(...args);
};

export const onRouteUpdate = (...args) => {
    ref.current?.onRouteUpdate(...args);
};

export const onRouteUpdateDelayed = (...args) => {
    ref.current?.onRouteUpdateDelayed(...args);
};

export const shouldUpdateScroll = (...args) => {
    ref.current?.shouldUpdateScroll(...args);
};

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props} ref={ref}>{element}</Layout>;
};
