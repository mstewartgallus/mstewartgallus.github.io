import type { ElementType } from "react";

export const componentName = <T>(Component: ElementType<T>) => {
    if (typeof Component === 'string') {
        return Component;
    }
    const name = Component.displayName ?? Component.name;
    return name;
};
