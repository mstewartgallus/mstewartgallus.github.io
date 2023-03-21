import { forwardRef } from "react";
import { Link } from "gatsby";
import { a as aClass } from "./a.module.css";

const useLinkProps = ({ href, target, download, ...props }) => {
    if (target || download) {
        return null;
    }

    if (!href) {
        return null;
    }

    if (href.startsWith("#")) {
        return null;
    }
    if (href.startsWith("http://")) {
        return null;
    }
    if (href.startsWith("https://")) {
        return null;
    }

    return ({ to: href, target, download, ...props });
};

const AImpl = ({children, ...props}, ref) => {
    const linkProps = useLinkProps(props);
    if (linkProps) {
        return <Link className={aClass} innerRef={ref} {...linkProps}>{children}</Link>;
    }
    return <a className={aClass} ref={ref} {...props}>{children}</a>;
};

export const A = forwardRef(AImpl);

export default A;
