import { forwardRef, useDeferredValue } from "react";
import { Button } from "../button";
import { Icon } from "../icon";

export const PushButton = forwardRef(function PushButton({children, open, ...props}, ref) {
    const deferredOpen = useDeferredValue(open);
    return <Button type="button" aria-expanded={String(open)} {...props} ref={ref}>
               <Icon open={deferredOpen}>{children}</Icon>
           </Button>;
});

export default PushButton;
