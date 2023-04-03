import { card } from "./card.module.css";

export const Card = ({children, className = '', ...props}) =>
<div className={`${card} ${className}`} {...props}>
    {children}
</div>;

export default Card;
