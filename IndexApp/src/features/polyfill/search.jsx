import { forwardRef } from "react";

export const Search = forwardRef(({children, ...props}, ref) =>
<search ref={ref} role="search" {...props}>
    {children}
</search>);
Search.displayName = `Search`;
