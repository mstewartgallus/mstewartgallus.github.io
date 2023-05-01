import { navigate as gatsbyNavigate } from "gatsby";

const timeout = t => new Promise(r => window.setTimeout(r, t));

export const navigate = async pathname => {
    if (!document.startViewTransition) {
        return await gatsbyNavigate(pathname);
    }

    const transition = document.startViewTransition(async () => {
        await Promise.race([gatsbyNavigate(pathname), timeout(1000)]);
    });

    return await transition.updateCallbackDone;
};
