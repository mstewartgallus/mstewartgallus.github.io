import { useFocus } from "@features/focus";
import { H1A } from "@features/ui";

export const SkipH1 = props => {
    const ref = useFocus();
    return <H1A {...props} ref={ref} />;
};
