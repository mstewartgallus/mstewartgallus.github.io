let prev = null;

export const prevLocation = () => prev;

export const onRouteUpdate = ({prevLocation: newPrevLocation}) => {
    prev = newPrevLocation;
};

export const onRouteUpdateDelayed = (...args) => {
};

export const shouldUpdateScroll = (...args) => {
    return true;
};
