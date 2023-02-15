exports.onCreateWebpackConfig = ({ actions, plugins }, { component }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        GATSBY_ROOT_COMPONENT_PATH: JSON.stringify(component)
      })
    ]
  });
};

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    component: Joi.string().required()
  });
};
