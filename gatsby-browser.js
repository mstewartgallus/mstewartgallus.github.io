import 'wicg-inert';
import "./src/assets/index.css";

// hack around the gatsby focus wrapper for manual focus management
export const onClientEntry = () => {
    document.getElementById('gatsby-focus-wrapper')?.removeAttribute('tabIndex');
};
