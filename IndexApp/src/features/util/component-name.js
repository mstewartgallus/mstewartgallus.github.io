export const componentName = Component => {
    if (typeof Component === 'string') {
        return Component;
    }
    const name = Component.displayName ?? Component.name;
    if (!name) {
        console.log(Component);
    }
    return name;
};
