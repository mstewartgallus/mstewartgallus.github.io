import * as React from "react";
import * as Gatsby from "gatsby";

const Link = ({ children, href, ...props }) =>
<Gatsby.Link {...props} to={href}>{children}</Gatsby.Link>;

export default Link;
