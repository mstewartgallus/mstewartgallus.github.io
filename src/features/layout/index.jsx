import { Focus } from "@features/focus";
import { ViewTransition } from "@features/view-transition";

export const wrapPageElement = ({ element }) =>
<>
    {element}
    <Focus />
    <ViewTransition />
</>;
