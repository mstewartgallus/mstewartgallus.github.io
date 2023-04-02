import { forwardRef } from "react";
import { useUnder } from "../../features/util";
import { H1 as UiH1 } from "../../features/ui";

const H1 = ({children, id, tabIndex = "-1", ...props}, ref) => {
    const under = useUnder();
    id = id ?? (under ? null : "content");
    return <UiH1 tabIndex={tabIndex} id={id} {...props}>{children}</UiH1>;
};

const H1Ref = forwardRef(H1);

export { H1Ref as H1 };
export default H1Ref;
