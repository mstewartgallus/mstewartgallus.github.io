import favicon from './favicon.svg';

const HeadComponents = [
    <meta name="color-scheme" content="dark light" />,
    <meta name="theme-color" content="#6000A0" />,
    // Disable inert style CSS insert
    <link id="inert-style" rel="icon" href={favicon} />
];

export const onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes
}) => {
    setHtmlAttributes({
        lang: "en"
    });
    setHeadComponents(HeadComponents);
};
