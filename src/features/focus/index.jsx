export { FocusProvider, useFocus } from "./focus.jsx";


// hack around the Gatsby focus wrapper for manual focus management
// after hydration
export const onInitialClientRender = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};
