import { Suspense, lazy, memo, createContext, useContext } from "react";
import { Card } from "@features/ui";
import { PanelServer } from "../panel-server";

// FIXME this is kind of silly but a better structure would really
// only be possible with top level await
const PanelClient = lazy(async () => {
    const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
    const hasInert = canUseDOM && window.document.createElement('div').inert === 'false';
    if (!hasInert) {
        await import('wicg-inert');
    }
    return import("../panel-client");
});

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
