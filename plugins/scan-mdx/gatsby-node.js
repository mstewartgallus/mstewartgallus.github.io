const path = require("path");

const paths = [];

exports.shouldOnCreateNode = ({node}) => 'Mdx' === node.internal.type;

exports.onCreateNode = async ({node}) => {
    paths.push([node.id, node.internal.contentFilePath]);
};

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
    const rels = paths.map(([id, p]) => {
        const q = path.relative("./blog", p);
        const dir = path.dirname(q);
        const base = path.basename(q, ".mdx");
        return [id, `${dir}/${base}`];
    });
    actions.setWebpackConfig({
        plugins: [
            plugins.define({
                GATSBY_MDX_PATHS: JSON.stringify(rels)
            })
        ]
    });
};
