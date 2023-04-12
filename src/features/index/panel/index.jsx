import { Suspense, lazy, memo, createContext, useContext } from "react";
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

const ContextProvider = memo(Context.Provider);
export const Accordion = ({children, value}) =>
<ContextProvider value={value}>
    {children}
</ContextProvider>;

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
