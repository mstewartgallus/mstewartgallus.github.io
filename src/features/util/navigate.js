import { navigate as gatsbyNavigate } from "gatsby";

export const navigate = async pathname => {
    if (!document.startViewTransition) {
        return await gatsbyNavigate(pathname);
    }

    const ref = { current: null };
    const transition = document.startViewTransition(async () => {
        const transition = ref.current;
        const ps = gatsbyNavigate(pathname);

        const timeOut = setTimeout(() => transition.skipTransition(), 10000);

        await ps;

        clearTimeout(timeOut);
    });
    ref.current = transition;
    return await transition.updateCallbackDone;
};
