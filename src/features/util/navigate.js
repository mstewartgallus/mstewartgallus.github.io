import { navigate as gatsbyNavigate } from "gatsby";

export const navigate = (...xs) => {
    if (!document.startViewTransition) {
        return gatsbyNavigate(...xs);
    }
    const trans = document.startViewTransition(() => gatsbyNavigate(...xs));
    return trans.finished;
}

export default navigate;
