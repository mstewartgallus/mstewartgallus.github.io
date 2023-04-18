import { forwardRef } from "react";

const displayName = Component => {
    if (typeof Component === 'string') {
        return Component;
    }
    return Component.displayName ?? Component.name;
};

const j = (x, y) => `${x} ${y}`;

const withClassImpl = (Component, className) => {
    const Classy = (props, ref) => {
        const clazz = props.className ?? '';
        const theClass = j(clazz, className);
        return <Component {...props} className={theClass} ref={ref} />;
    };
    return Classy;
};

// FIXME awkward
// doesn't handle CSS conflicts
export const withClass = (Component, className) => {
    const Classy = withClassImpl(Component, className);
    const name = displayName(Component);
    Classy.displayName = name ? `Class(${name}, ${className})` : `Class(${className})` ;
    return forwardRef(Classy);
};
