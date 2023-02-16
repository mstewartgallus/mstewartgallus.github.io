import * as React from "react";
import { Link } from "gatsby";

const internal = href => href && href.startsWith("/");

const linkish = ({href, download, target}) =>
      internal(href) && !download && !target;

export const A = ({ children, ...props }) => {
    if (linkish(props)) {
        return <Link {...props} to={props.href}>{children}</Link>;
    } else {
        return <a {...props}>{children}</a> ;
    }
};

export default A;
