const paths = new Set();

exports.shouldOnCreateNode = ({node}) => 'PostMdx' === node.internal.type;

exports.onCreateNode = async ({node}) => {
    paths.add(node.path);
};

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
    actions.setWebpackConfig({
        plugins: [
            plugins.define({
                GATSBY_MDX_PATHS: JSON.stringify(Array.from(paths))
            })
        ]
    });
};
