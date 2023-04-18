import { H2 } from "@features/ui";
import { Client } from "@features/util";

import {
    Disclosure as DisclosureClient,
    Summary as SummaryClient
} from "./client.jsx";

export const Disclosure = props => {
    const {children, summary} = props;
    return <Client fallback={
                       <>
                           {summary}
                           {children}
                       </>
                   }>
               <DisclosureClient {...props} />
           </Client>;
};

export const Summary = props => {
    const {children, id} = props;
    return <Client
               fallback={
                   <H2 tabIndex="-1" id={id}>
                       {children}
                   </H2>
               }>
               <H2>
                   <SummaryClient {...props} />
               </H2>
           </Client>;
};
