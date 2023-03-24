import { useId, useTransition, useCallback, createContext, useContext } from "react";
import { Card, H2 } from "../../features/ui";
import { state, button } from "./panel.module.css";

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

    const contentId = `${id}-content`;
    const titleId = `${id}-title`;

    const open = selected === value;

    return <Card>
               <H2 id={titleId} onClick={onClickWrapper}>
                   <button className={button}
                           aria-controls={contentId}
                           aria-expanded={String(open)}>
                       <span aria-hidden="true" className={state} data-open={String(open)}>
                           &ensp;
                       </span>
                       {heading}
                   </button>
               </H2>
               <nav id={contentId}
                    aria-labelledby={titleId}
                    hidden={open ? null : "hidden"}>
                   {children}
               </nav>
           </Card>;
};
