import { heading } from "./heading.module.css";

export const H1 = ({children, ...props}) =>
<h1 className={heading} {...props}>{children}</h1>;

export const H2 = ({children, ...props}) =>
<h2 className={heading} {...props}>{children}</h2>;

export const H3 = ({children, ...props}) =>
<h3 className={heading} {...props}>{children}</h3>;

export const H4 = ({children, ...props}) =>
<h4 className={heading} {...props}>{children}</h4>;

export const H5 = ({children, ...props}) =>
<h5 className={heading} {...props}>{children}</h5>;

export const H6 = ({children, ...props}) =>
<h6 className={heading} {...props}>{children}</h6>;
