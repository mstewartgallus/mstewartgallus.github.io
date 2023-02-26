exports.onCreateWebpackConfig = (
    { actions: { setWebpackConfig }},
    { component }
) => setWebpackConfig({
    resolve: {
        alias: {
            'gatsby-plugin-layout/layout$': component
        }
    }
});

exports.pluginOptionsSchema = ({ Joi }) => Joi.object({
    component: Joi.string().required()
});
