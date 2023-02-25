import { Script } from "gatsby";

export const JsonLd = ({srcdoc}) => {
    const json = JSON.stringify(srcdoc);
    return <Script type="application/ld+json">{json}</Script>;
};

export default JsonLd;
