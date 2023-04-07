import { memo, forwardRef, useMemo } from "react";
import { Link } from "gatsby";
import { useUnder } from "../../../features/util";
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

const A = ({children, className = '', ...props}, ref) => {
    const under = useUnder();
    const linkProps = useLinkProps(props);

    if (under) {
        ref = null;
    }

    if (linkProps) {
        return <Link className={`${aClass} ${className}`} innerRef={ref} {...linkProps}>{children}</Link>;
    }
    return <a className={`${aClass} ${className}`} ref={ref} {...props}>{children}</a>;
};

const ARef = memo(forwardRef(A));

export { ARef as A, ARef as default };
