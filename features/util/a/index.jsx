// import { withClick } from "./with-click.jsx";
// import { withHovering } from "./with-hovering.jsx";
// import { withPrefetch } from "./with-prefetch.jsx";
// import { useLocal } from "./use-local.js";

// const ALocal = withHovering('a');

export const A = props => {
    // const local = useLocal(props);

    // if (local) {
    //     return <ALocal {...props} ref={ref} />;
    // }
    return <a {...props} />;
};
