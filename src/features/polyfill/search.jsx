import { forwardRef } from "react";

const Search = ({children, ...props}, ref) =>
<search ref={ref} role="search" {...props}>
    {children}
</search>;

const SearchRef = forwardRef(Search);

export { SearchRef as Search, SearchRef as default };
