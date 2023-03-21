import { forwardRef, useMemo } from "react";
import { Link } from "gatsby";
import { a as aClass } from "./a.module.css";
import { useLocation } from "./use-location.js";

const useTo = (href, location) => useMemo(() => {
    if (!href) {
        return null;
    }

    const url = new URL(href, location);
    const { origin, hash, pathname, search } = url;

    if (hash) {
        return null;
    }

    if (origin !== new URL(location).origin) {
        return null;
    }

    return `${pathname}${search}`;
}, [href, location]);

const useLinkProps = ({ href, target, download, ...props }) => {
    const location = useLocation();
    const to = useTo(href, location);

    if (!to || target || download) {
        return null;
    }

    return { to, target, download, ...props };
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
