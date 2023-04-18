import { useDeferredValue } from "react";
import { useScrollRestoration } from "gatsby";
import { Client } from "@features/util";
import { viewport } from "./viewport.module.css";

const ScrollClient = ({scrollKey, children}) => {
    const scroll = useScrollRestoration(scrollKey);
    // avoid forced reflow
    // FIXME also use Suspense around here?
    const deferred = useDeferredValue(scroll);
    return children(deferred);
};

// Avoid a useLayoutEffect warning with useScrollRestoration
const Scroll = ({scrollKey, children}) =>
<Client fallback={children({})}>
    <ScrollClient scrollKey={scrollKey}>
        {children}
    </ScrollClient>
</Client>;

export const Viewport = ({children}) =>
<Scroll scrollKey="viewport">
    {
        scroll => <div className={viewport} {...scroll}>{children}</div>
    }
</Scroll>;
