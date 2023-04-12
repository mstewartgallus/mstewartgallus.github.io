let focus = null;

export const focusRef = elem => focus = elem;

// hack around the Gatsby focus wrapper for manual focus management
export const onClientEntry = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};

// Gatsby already handles scroll, focus-visible for extra emphasis
const opts = { focusVisible: true, preventScroll: true };

export const onRouteUpdate = ({prevLocation, location}) => {
    if (!prevLocation) {
        return;
    }

    const { hash } = location;
    if (hash) {
        const elem = document.getElementById(hash.slice(1));
        elem?.focus(opts);
        return;
    }

    if (prevLocation.pathname === location.pathname) {
        return;
    }

    const current = focus;
    if (!current) {
        return;
    }

    current.focus(opts);
};
