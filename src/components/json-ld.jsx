export const JsonLd = ({srcdoc}) => {
    const json = JSON.stringify(srcdoc);
    return <script type="application/ld+json">{json}</script>;
};

export default JsonLd;
