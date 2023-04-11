import { StrictMode } from "react";

const Root = ({ children }) =>
<StrictMode>
    {children}
</StrictMode>;

export const wrapRootElement = ({element}) =>
<Root>{element}</Root>;
