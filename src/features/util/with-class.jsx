import { forwardRef } from "react";

const displayName = Component => {
    if (typeof Component === 'string') {
        return Component;
    }
    return Component.displayName ?? Component.name;
};

// FIXME awkward
// doesn't handle CSS conflicts
export const withClass = (Component, className) => {
    const Classy = (props, ref) => {
        const theClass = [className, props.className ?? ''].join(' ');
        return <Component {...props} className={theClass} ref={ref} />;
    };
    const name = displayName(Component);
    Classy.displayName = name ? `Class(${name}, ${className})` : `Class(${className})` ;
    return forwardRef(Classy);
};
