import { card } from "./card.module.css";

export const Card = props => {
    const className = [card, props.className ?? ''].join(' ');
    return <div {...props} className={className} />;
};

export default Card;
