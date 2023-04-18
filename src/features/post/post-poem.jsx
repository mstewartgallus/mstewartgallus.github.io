import { Poem } from "./poem.jsx";

export const PostPoem = ({
    poem: { content }
}) => <Poem poem={content} />;
