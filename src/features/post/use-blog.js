import Prose from "gatsby-plugin-index/index/Prose.js";
import Poem from "gatsby-plugin-index/index/Poem.js";
import Web from "gatsby-plugin-index/index/Web.js";

const indices = Object.freeze(new Map([
    ["Prose", Prose],
    ["Poem", Poem],
    ["Web", Web]
]));

export const useBlog = (sourceInstanceName, relativePath) => {
    const index = indices.get(sourceInstanceName);
    if (!index) {
        throw new Error(`Index ${sourceInstanceName} not found in ${indices}`);
    }

    const Component = index.get(relativePath);
    if (!Component) {
        throw new Error(`${relativePath} not found in index ${index}`);
    }
    return Component;
};

export default useBlog;
