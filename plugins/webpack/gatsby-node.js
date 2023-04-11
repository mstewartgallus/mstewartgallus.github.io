const path = require("node:path");

const webpack = {
    "experiments": {
        "topLevelAwait": true
    },
    "resolve": {
        "alias": {
            "@features": path.resolve(__dirname, "../../src/features"),
            "@content": path.resolve(__dirname, "../../content")
        }
    }
};

exports.onCreateWebpackConfig = ({
    actions: { setWebpackConfig }
}) => setWebpackConfig(webpack);
