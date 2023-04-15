import { forwardRef } from "react";
import { Button } from "../button";
import { Icon } from "../icon";

export const PushButton = forwardRef(function PushButton({children, open, ...props}, ref) {
    return <Button type="button" aria-expanded={String(open)} {...props} ref={ref}>
               <Icon open={open}>{children}</Icon>
           </Button>;
});

export default PushButton;
