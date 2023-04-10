import favicon from './favicon.svg';
import props from "./properties.json";

const HeadComponents = [
    <meta name="color-scheme" content="dark light" />,
    <meta name="theme-color" content="#6000A0" />,
    // Disable inert style CSS insert
    <link id="inert-style" rel="icon" href={favicon} />
];

export const onClientEntry = () => {
    if (!window.CSS || !window.CSS.registerProperty) {
        return;
    }
    for (const prop of props) {
        try {
            window.CSS.registerProperty(prop);
        } catch (e) {
            console.warn(prop);
            throw e;
        }
    }
};

export const onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes
}) => {
    setHtmlAttributes({
        lang: "en"
    });
    setHeadComponents(HeadComponents);
};
