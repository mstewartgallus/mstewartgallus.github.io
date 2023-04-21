import { set, item } from "./set.module.css";

// A flat unordered list of items

export const Set = ({children, ...props}) =>
// Set role="list" and listitem to workaround a Safari feature to
// mitigate overuse of lists
<ul role="list" className={set} {...props}>
    {children}
</ul>;

export const SetItem = ({children, ...props}) =>
<li role="listitem" className={item} {...props}>
    &emsp;
    {children}
</li>;
