import * as React from "react";
import Comment from "./comment.jsx";

function CommentList({id, comments, replies}) {
    const allReplies = replies.get(id);
    if (!allReplies) {
        return null;
    }
    return allReplies.map(id => {
        const comment = comments.get(id);
        return <Comment key={id} {...comment}>
                   <CommentList id={id} comments={comments} replies={replies} />
               </Comment>;
    });
}

export default CommentList;
