import { useScrollRestoration } from "gatsby";

export const ScrollClient = ({scrolled}) => {
    const scroll = useScrollRestoration(`viewport`);
    return scrolled(scroll);
};

export default ScrollClient;
