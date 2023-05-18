import "./focus.css";

// hack around the Gatsby focus wrapper for manual focus management
// after hydration
export const onInitialClientRender = () => {
    const wrapper = document.getElementById('gatsby-focus-wrapper');
    if (!wrapper) {
       return;
    }
    wrapper.removeAttribute('tabIndex');
    wrapper.removeAttribute('id');
};
