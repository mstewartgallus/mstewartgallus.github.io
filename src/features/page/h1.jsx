import { forwardRef } from "react";
import { H1 as UiH1 } from "@features/ui";

const H1 = (props, ref) =>
<UiH1
    {...props}
    id={props.id ?? 'content'}
    tabIndex={props.tabIndex ?? '-1'}
    ref={ref}
/>;

const H1Ref = forwardRef(H1);

export { H1Ref as H1 };
export default H1Ref;
