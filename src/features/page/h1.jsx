import { forwardRef } from "react";
import { H1 as UiH1 } from "@features/ui";

const H1 = ({children, id = "content", tabIndex = "-1", ...props}, ref) =>
<UiH1 {...props} id={id} ref={ref}>{children}</UiH1>;

const H1Ref = forwardRef(H1);

export { H1Ref as H1 };
export default H1Ref;
