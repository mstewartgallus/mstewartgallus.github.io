import * as React from "react";
import { iframe as iframeClass } from "./comments.module.css";

const Account = ({url, display_name, acct}) => {
    const name = display_name !== '' ? display_name : acct;
    return <a rel="nofollow" href={url}>{name}</a>;
};

const srcdoc = fragment =>
`<!DOCTYPE html>
<html>
<head>
<meta name="color-scheme" content="dark light" >
<style>
:root, body { margin: 0; background: Canvas }
</style>
</head>
<body>
${fragment}
</body>
</html>
`;

const Sandbox = ({fragment}) => {
    return <iframe className={iframeClass}
                   allow=""
                   sandbox=""
                   credentialless="true"
                   srcdoc={srcdoc(fragment)}/>;
};

const Comment = ({url, account, content}) =>
<article>
    <div><Account {...account} /> <a rel="nofollow" href={url}>#</a></div>
    <div><Sandbox fragment={content} /></div>
</article>;

const CommentList = ({host, id}) => {
    const [json, setJson] = React.useState(null);
    React.useEffect(() => {
        (async () => {
            // FIXME abort/ignore
            const url = new URL(`/api/v1/statuses/${id}/context`, host);
            const response = await fetch(url);
            const json =  await response.json();
            setJson(json);
        })();
    },  []);
    const comments = json?.descendants;
    return comments &&
        <ul>{comments.map(comment =>
            <li key={comment.id}><Comment {...comment} /></li>)
        }</ul>;
};

export const Comments = ({host, id}) => {
    const [open, setOpen] = React.useState(false);
    const onToggle = event => {
        setOpen(!open);
    };
    return <details onToggle={onToggle} open={open ? "open" : null}>
               <summary>Load Comments</summary>
               <div style={{"maxWidth":"60ch"}}>
                   { open && <CommentList host={host} id={id} /> }
               </div>
           </details>;
};

export default Comments;
