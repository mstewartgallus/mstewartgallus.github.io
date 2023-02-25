import * as React from "react";
import { Link } from "gatsby";

const internal = href => href.startsWith("/");

const linkish = ({href, download, target}) =>
      href && internal(href) && !download && !target;

const AImpl = ({ children, ...props }, ref) =>
      linkish(props) ?
    <Link {...props} to={props.href} ref={ref}>{children}</Link> :
<a {...props} ref={ref}>{children}</a>;

export const A = React.forwardRef(AImpl);

export default A;
