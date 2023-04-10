const path = require("node:path");

const webpack = {
    "experiments": {
        "topLevelAwait": true
    },
    "resolve": {
        "alias": {
            "@features": path.resolve(__dirname, "../../src/features")
        }
    }
};

exports.onCreateWebpackConfig = ({
    actions: { setWebpackConfig }
}) => setWebpackConfig(webpack);
