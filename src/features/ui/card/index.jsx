import { card } from "./card.module.css";

export const Card = ({children}) =>
<div className={card}>
    {children}
</div>;

export default Card;
