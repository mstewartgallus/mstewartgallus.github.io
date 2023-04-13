import { Suspense, lazy, createContext, useContext } from "react";
import { Card } from "@features/ui";
import { PanelServer } from "../panel-server";

const supportsInert = () => {
    if (typeof window === 'undefined') {
        return false;
    }
    return document.createElement('p').inert === false;
};

// FIXME this is kind of silly but a better structure would really
// only be possible with top level await
const PanelClient = lazy(() => supportsInert() ?
                         import("../panel-client") :
                         import("./panel-client-inert.jsx"));

const Context = createContext(null);
Context.displayName = 'Accordion';

export const Accordion = ({children, value}) =>
<Context.Provider value={value}>
    {children}
</Context.Provider>;

const PanelDynamic = ({id, children, heading, open, onClick}) =>
<Suspense
    fallback={
        <PanelServer id={id} heading={heading}>
            {children}
        </PanelServer>
    }>
    <PanelClient id={id} heading={heading} open={open} onClick={onClick}>
        {children}
    </PanelClient>
</Suspense>;

export const Panel = ({id, children, heading, value, onClick}) => {
    const selected = useContext(Context);
    const open = selected === value;

    return <Card>
               <PanelDynamic id={id} heading={heading} open={open} onClick={onClick}>
                   {children}
               </PanelDynamic>
           </Card>;
};
