import { useMemo } from "react";

export const JsonLd = ({srcdoc}) => {
    const json = useMemo(() => JSON.stringify(srcdoc), [srcdoc]);
    return <script type="application/ld+json">{json}</script>;
};

export default JsonLd;
