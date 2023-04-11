import { blockquote as blockquoteClass } from "./blockquote.module.css";

export const Blockquote = ({children, ...props}) =>
<blockquote className={blockquoteClass} {...props}>
    {children}
</blockquote>;

export default Blockquote;
