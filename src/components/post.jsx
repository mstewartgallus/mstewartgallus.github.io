import * as React from "react";

const PostContext = React.createContext(null);
const Provider = PostContext.Provider;

export const PostProvider = ({children, value}) =>
<Provider value={value}>{children}</Provider>;

export const Post = props => {
    const ix = React.useContext(PostContext);
    return props[ix];
};

export default Post;
