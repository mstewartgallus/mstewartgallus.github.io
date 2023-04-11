import { lazy, memo, createContext, useContext } from "react";
import { useClient } from "@features/util";
import { Card } from "@features/ui";
import { PanelServer } from "../panel-server";

const PanelClient = lazy(() => import("../panel-client"));

const Context = createContext(null);
Context.displayName = 'Accordion';

const ContextProvider = memo(Context.Provider);
export const Accordion = ({children, value}) =>
<div>
    <ContextProvider value={value}>
        {children}
    </ContextProvider>
</div>;

const PanelDynamic = ({id, children, heading, open, onClick}) => {
    const client = useClient();
    return client ?
        <PanelClient id={id} heading={heading} open={open} onClick={onClick}>
            {children}
        </PanelClient> :
    <PanelServer id={id} heading={heading}>
        {children}
    </PanelServer>;
};

export const Panel = ({id, children, heading, value, onClick}) => {
    const selected = useContext(Context);
    const open = selected === value;

    return <Card>
               <PanelDynamic id={id} heading={heading} open={open} onClick={onClick}>
                   {children}
               </PanelDynamic>
           </Card>;
};
