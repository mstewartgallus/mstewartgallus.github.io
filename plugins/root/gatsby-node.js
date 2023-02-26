exports.onCreateWebpackConfig = (
    { actions: { setWebpackConfig } },
    { component }
) => setWebpackConfig({
    resolve: {
        alias: {
            'gatsby-plugin-root/root$': component
        }
    }
});

exports.pluginOptionsSchema = ({ Joi }) => Joi.object({
    component: Joi.string().required()
});
