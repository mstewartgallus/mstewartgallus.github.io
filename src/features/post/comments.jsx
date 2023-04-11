import { lazy, Suspense } from "react";

const CommentsClient = lazy(() => import("./comments-client.jsx"));

export const Comments = ({ host, id }) =>
<Suspense fallback="">
    <CommentsClient host={host} id={id} />
</Suspense>;

export default Comments;
