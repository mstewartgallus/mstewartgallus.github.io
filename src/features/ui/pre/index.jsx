import { pre as preClass } from "./pre.module.css";

export const Pre = props => {
    const className = [preClass, props.className ?? ''].join(' ');
    return <pre {...props} className={className} />;
};

export default Pre;
