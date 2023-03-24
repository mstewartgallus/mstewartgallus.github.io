// Disable inert style CSS insert
const HeadComponents = [<link id="inert-style" />];

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents(HeadComponents);
};
