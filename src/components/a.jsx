import * as React from "react";
import * as Gatsby from "gatsby";

const internal = href => href && href.startsWith("/");

const linkish = ({href, download, target}) =>
      internal(href) && !download && !target;

export const A = ({ children, ...props }) =>
      linkish(props) ?
    <Gatsby.Link {...props} to={props.href}>{children}</Gatsby.Link> :
<a {...props}>{children}</a> ;

export default A;
