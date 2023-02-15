const React = require(`react`);

const preferDefault = m => (m && m.default) || m;
// eslint-disable-next-line
const Root = preferDefault(require(GATSBY_ROOT_COMPONENT_PATH));
// eslint-disable-next-line
exports.wrapRootElement = ({ element, props }) => <Root {...props}>{element}</Root>;
