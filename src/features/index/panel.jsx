import { useId, useTransition, useCallback } from "react";
import { H2 } from "../../features/ui";
import { summary } from "./panel.module.css";

export const Panel = ({children, heading, open, onClick}) => {
    const id = useId();
    const [isPending, startTransition] = useTransition();

    const onClickWrapper = useCallback(e => startTransition(() => onClick(e)), [onClick]);

    const detailsId = `${id}-details`;
    const headingTextId = `${id}-heading-text`;
    const headingId = `${id}-heading`;
    const contentId = `${id}-content`;

    return <article aria-labelledby={headingTextId}>
               <span aria-owns={headingId} />
               <span aria-owns={contentId} />
               <details
                   id={detailsId}
                   open={open}
                   aria-labelledby={headingTextId}
               >
                   <summary
                       className={summary}
                       onClick={onClickWrapper}
                       aria-labelledby={headingTextId}
                       aria-controls={contentId}
                       aria-expanded={String(!!open)}
                   >
                       <span aria-owns={headingTextId} />
                       <H2 id={headingId}
                           aria-labelledby={headingTextId}>
                           <span aria-owns={detailsId} />
                           <span id={headingTextId}>
                               {heading}
                           </span>
                       </H2>
                   </summary>
                   <div id={contentId}>
                       {children}
                   </div>
               </details>
           </article>;
};

export default Panel;
