import { FocusProvider } from "@features/focus";
import { ViewTransition } from "@features/view-transition";

export const Layout = ({ children }) =>
<>
    <FocusProvider>
        {children}
    </FocusProvider>
    <ViewTransition />
</>;
