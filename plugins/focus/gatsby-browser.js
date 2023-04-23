import "./focus.css";

// hack around the Gatsby focus wrapper for manual focus management
// after hydration
export const onInitialClientRender = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};
