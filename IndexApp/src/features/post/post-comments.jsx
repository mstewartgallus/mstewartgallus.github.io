import { H2A, Section } from "@features/ui";
import { Comments } from "./comments.jsx";

const PostComments = ({ host, id }) =>
<Section heading={
             <H2A id="comments">Comments</H2A>
         }>
    <Comments host={host} id={id} />
</Section>;

export default PostComments;
