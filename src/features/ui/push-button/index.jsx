import { Button } from "../button";
import { Icon } from "../icon";

export const PushButton = ({children, open, ...props}) =>
<Button type="button" aria-expanded={String(open)} {...props}>
    <Icon open={open}>{children}</Icon>
</Button>;

export default PushButton;
