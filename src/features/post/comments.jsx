import * as React from "react";
import { createPortal } from "react-dom";
import { comments as commentsClass } from "./comments.module.css";
import CommentList from "./comment-list.jsx";
import useComments from '../../hooks/use-comments.js';
import useClient from '../../hooks/use-client.js';


const parseComment = ({id, url, content, account }) => [id, { url, content, account }];

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

const LazyCommentList = ({ host, id }) => {
    const comments = useComments({host, id});
    const data = React.useMemo(() => parseComments(comments), [comments]);
    const replies = React.useMemo(() => parseChildren(comments), [comments]);
    if (data) {
        return <CommentList comments={data} replies={replies} id={id} />;
    }
    return "Loading...";
};

const CommentPreload = ({ host, id }) => {
    const url = new URL(`/api/v1/statuses/${id}/context`, host);
    return <link rel="preload" as="fetch" type="application/json" crossOrigin="" href={url} />;
};

const Preload = ({ host, id }) => {
    const client = useClient();

    return client && createPortal(
        <CommentPreload host={host} id={id} />,
        document.head);
};


const initial = {
    open: false,
    openedOnce: false
};

const reducer = (state, action) => {
    switch (action) {
    case 'toggle':
        return { open: !state.open, openedOnce: true };
    default:
        return state;
    }
};

export const Comments = ({ host, id }) => {
    const [state, dispatch] = React.useReducer(reducer, initial);
    const ident = React.useId();

    const onToggle = React.useCallback(event => {
        dispatch('toggle');
    }, []);

    return <>
               <section className={commentsClass} aria-labelledby={ident} open={state.open ? "" : null}>
                   <header className="sr-only">
                       <hgroup>
                           <h2 id={ident}>Comments</h2>
                       </hgroup>
                   </header>
                   <details onToggle={onToggle}>
                       <summary>Comments</summary>
                       {state.openedOnce && <LazyCommentList host={host} id={id} />}
                   </details>
               </section>
               <Preload host={host} id={id} />
           </>;
};

export default Comments;
