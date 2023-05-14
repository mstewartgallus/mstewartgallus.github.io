import { H2, Section, SubtleA } from "@features/ui";
import { Comments } from "./comments.jsx";

const PostComments = ({ host, id }) =>
<Section heading={
             <H2>
                 <SubtleA id="comments" href="#comments">Comments</SubtleA>
             </H2>
         }>
    <Comments host={host} id={id} />
</Section>;

export default PostComments;
