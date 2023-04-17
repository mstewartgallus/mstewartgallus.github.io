import { H2 } from "@features/ui";
import { Client } from "@features/util";

import {
    Disclosure as DisclosureClient,
    Summary as SummaryClient
} from "./client.jsx";

export const Disclosure = ({children, summary, open}) =>
<Client fallback={
              <>
                  {summary}
                  {children}
              </>
          }>
    <DisclosureClient open={open} summary={summary}>
        {children}
    </DisclosureClient>
</Client>;

export const Summary = ({id, children, onClick}) =>
<Client
    fallback={
        <H2 tabIndex="-1" id={id}>
            {children}
        </H2>
    }>
    <H2>
        <SummaryClient id={id} onClick={onClick}>
            {children}
        </SummaryClient>
    </H2>
</Client>;
