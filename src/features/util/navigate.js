import { navigate as gatsbyNavigate } from "gatsby";

export const navigate = (...xs) => {
    if (!document.startViewTransition) {
        return gatsbyNavigate(...xs);
    }

    let navigatePs;
    document.startViewTransition(() => {
        navigatePs = gatsbyNavigate(...xs);

        const timeout = new Promise(r => setTimeout(r, 100));

        return Promise.race([navigatePs, timeout]);
    });
    return navigatePs;
}

export default navigate;
