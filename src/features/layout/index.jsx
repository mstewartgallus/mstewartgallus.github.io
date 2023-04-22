import { FocusProvider } from "@features/focus";
import { ViewTransition } from "@features/view-transition";
import { Theme } from "@features/ui";

export const wrapPageElement = ({ element }) =>
<>
    <FocusProvider>
        <Theme>
            {element}
        </Theme>
    </FocusProvider>
    <ViewTransition />
</>;
