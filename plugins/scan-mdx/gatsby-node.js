const paths = new Set();

exports.shouldOnCreateNode = ({node}) => 'PostMdx' === node.internal.type;

exports.onCreateNode = async ({node}) => {
    paths.add(node.path);
};

exports.onCreateWebpackConfig = ({ actions, plugins }, { blog }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                'blog': blog
            }
        },
        plugins: [
            plugins.define({
                GATSBY_MDX_PATHS: JSON.stringify(Array.from(paths))
            })
        ]
    });
};


exports.pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        blog: Joi.string().required()
    });
};
