const Layout = require("./layout.jsx");

const HtmlAttributes = {
    lang: "en"
};

exports.wrapRootElement = Layout.wrapRootElement;
exports.wrapPageElement = Layout.wrapPageElement;
exports.onRenderBody = ({setHtmlAttributes}) => {
    setHtmlAttributes(HtmlAttributes);
}
