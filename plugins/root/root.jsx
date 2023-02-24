import * as React from "react";
import Root from "gatsby-plugin-root/root";

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

export const wrapRootElement = ({ element, props }) => {
    return <Root {...props} ref={ref}>{element}</Root>;
};
