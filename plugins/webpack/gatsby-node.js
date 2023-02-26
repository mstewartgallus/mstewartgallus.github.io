const webpack = {
    "experiments": {
        "topLevelAwait": true
    }
};

exports.onCreateWebpackConfig = ({
    actions: { setWebpackConfig }
}) => setWebpackConfig(webpack);
