const webpack = {
    "experiments": {
        "topLevelAwait": true
    }
};

exports.onCreateWebpackConfig = ({ actions }) => actions.setWebpackConfig(webpack);
