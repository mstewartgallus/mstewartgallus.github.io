import { useId, useTransition, useCallback, createContext, useContext } from "react";
import { Card, H2 } from "../../features/ui";
import { summary } from "./panel.module.css";

const Context = createContext(null);

export const Accordion = ({children, value}) => {
    return <div>
               <Context.Provider value={value}>
                   {children}
               </Context.Provider>
           </div>;
};

export const Panel = ({children, heading, value, onClick}) => {
    const [isPending, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const id = useId();
    const selected = useContext(Context);

    const detailsId = `${id}-details`;
    const headingTextId = `${id}-heading-text`;
    const headingId = `${id}-heading`;
    const contentId = `${id}-content`;

    const open = selected === value;

    return <Card>
               <span aria-owns={headingId} />
               <span aria-owns={contentId} />
               <details
                   id={detailsId}
                   open={open ? "open" : null}
                   aria-labelledby={headingTextId}
               >
                   <summary
                       onClick={onClickWrapper}
                       className={summary}
                       aria-labelledby={headingTextId}
                       aria-controls={contentId}
                       aria-expanded={String(open)}
                   >
                       <span aria-owns={headingTextId} />
                       <H2 id={headingId} aria-labelledby={headingTextId}>
                           <span aria-owns={detailsId} />
                           <span id={headingTextId}>
                               {heading}
                           </span>
                       </H2>
                   </summary>
                   <section aria-labelledby={headingTextId} id={contentId}>
                       {children}
                   </section>
               </details>
           </Card>;
};
