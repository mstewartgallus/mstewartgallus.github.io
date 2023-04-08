let focus = null;

export const focusRef = elem => focus = elem;

// hack around the gatsby focus wrapper for manual focus management
export const onClientEntry = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};

export const onRouteUpdate = ({prevLocation, location}) => {
    if (!prevLocation) {
        return;
    }

    const { hash } = location;
    if (hash) {
        const elem = document.getElementById(hash.slice(1));
        elem.focus({ focusVisible: true});
        return;
    }

    if (prevLocation.pathname === location.pathname) {
        return;
    }

    const current = focus;
    if (!current) {
        return;
    }

    current.focus({ preventScroll: true, focusVisible: true});
};
