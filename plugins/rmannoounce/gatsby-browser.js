// hack around the Gatsby Route Announcer
export const onInitialClientRender = () => {
    document.getElementById('gatsby-announcer')?.remove();
};
