export { wrapRootElement, wrapPageElement } from "./layout.jsx";

const HtmlAttributes = {
    lang: "en"
};

export const onRenderBody = ({setHtmlAttributes}) => {
    setHtmlAttributes(HtmlAttributes);
};
