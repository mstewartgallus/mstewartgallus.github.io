import { useState, useEffect } from "react";
import { Comment } from "./comment.jsx";
import { CommentList, CommentItem } from "./comment-list.jsx";

const parseComment = ({id, url, content, account }) => [id, { url, account, content }];

const parseComments = comments => {
    if (!comments) {
        return null;
    }
    return new Map(comments.map(parseComment));
};

const parseChildren = comments => {
    if (!comments) {
        return null;
    }
    // group by in_reply_to_id
    const map = new Map(comments.map(c => [c.in_reply_to_id, []]));
    for (const {in_reply_to_id, id} of comments) {
        map.get(in_reply_to_id).push(id);
    }
    return map;
};

const zipComments = ({id, comments, replies}) => {
    function loop(id) {
        const comment = comments.get(id);
        const allReplies = replies.get(id) ?? [];

        return { id, ...comment, replies: allReplies.map(loop) };
    }

    return (replies.get(id) ?? []).map(loop);
};


function CommentTree({id, account, url, content, replies}) {
    return <Comment account={account} url={url} content={content}>
               <CommentList>
                   {

                       replies.map(comment =>
                           <CommentItem key={comment.id}>
                               <CommentTree {...comment} />
                           </CommentItem>
                       )
                   }
               </CommentList>
           </Comment>;
}


const CommentsClient = ({ host, id }) => {
    const [comments, setComments] = useState(null);

    useEffect(() => {
        let ignore = false;

        (async () => {
            const request = new Request(new URL(`/api/v1/statuses/${id}/context`, `https://${host}`));
            const response = await fetch(request);
            if (!response.ok) {
                throw new Error(`${response.status} ${response.statusText}`);
            }
            if (ignore) {
                return;
            }

            const json = await response.json();
            if (ignore) {
                return;
            }

            const comments = json?.descendants ?? null;

            const data = parseComments(comments);
            const replies = parseChildren(comments);

            const zipped = zipComments({ id, comments: data, replies });

            setComments(zipped);
        })();

        return () => ignore = true;
    }, [host, id]);

    if (!comments) {
        return "Loading...";
    }

    return <CommentList>
               {
                   comments.map(comment =>
                       <CommentItem key={comment.id}>
                           <CommentTree {...comment} />
                       </CommentItem>)
               }
           </CommentList>;
};

export default CommentsClient;
