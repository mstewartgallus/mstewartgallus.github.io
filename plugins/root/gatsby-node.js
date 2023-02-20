exports.onCreateWebpackConfig = ({ actions, plugins }, { component }) =>
actions.setWebpackConfig({
    resolve: {
        alias: {
            'gatsby-plugin-root/root$': component
        }
    }
});

exports.pluginOptionsSchema = ({ Joi }) => {
    return Joi.object({
        component: Joi.string().required()
    });
};
