import favicon from './favicon.svg';

const HeadComponents = [
    <link rel="preload" href="/page-data/app-data.json" as="fetch" crossOrigin="anonymous" />,
    <meta name="color-scheme" content="dark light" />,
    <meta name="theme-color" content="#6000A0" />,
    <link rel="icon" href={favicon} />
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
