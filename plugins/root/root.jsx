import * as React from "react";
// eslint-disable-next-line
const Root = await import(GATSBY_ROOT_COMPONENT_PATH);

export const wrapRootElement = ({ element, props }) => <Root {...props}>{element}</Root>;
