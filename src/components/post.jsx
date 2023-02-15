import * as React from "react";

const PostContext = React.createContext(null);
const Provider = PostContext.Provider;

export const PostProvider = ({children, Post}) => <Provider value={Post}>{children}</Provider>;

export const Post = ({ children, ...props }) => {
    const Impl = React.useContext(PostContext);
    return <Impl {...props}>{children}</Impl>;
};

export default Post;
