import { FocusProvider } from "@features/focus";
import { ViewTransition } from "@features/view-transition";

export const wrapPageElement = ({ element }) =>
<>
    <FocusProvider>
        {element}
    </FocusProvider>
    <ViewTransition />
</>;
