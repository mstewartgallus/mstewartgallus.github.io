import { useScrollRestoration } from "gatsby";
import { Client } from "@features/util";
import { viewport } from "./viewport.module.css";

// Get rid of a warning of using useLayoutEffect on the server in a
// silly convolutaed way

const ScrollClient = ({children}) => {
    const scroll = useScrollRestoration(`viewport`);
    return children(scroll);
};

const Scroll = ({children}) =>
<Client fallback={children({})}>
    <ScrollClient>
        {children}
    </ScrollClient>
</Client>;

export const Viewport = ({children}) =>
<Scroll>
    {
        scroll => <div className={viewport} {...scroll}>{children}</div>
    }
</Scroll>;
