import { useId, useTransition, useCallback, createContext, useContext } from "react";
import { Card, H2 } from "../../features/ui";
import { section, button } from "./panel.module.css";

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
               <H2>
                   <button onClick={onClickWrapper}
                           className={button}
                           aria-controls={contentId}
                           aria-expanded={String(open)}>
                       <span id={titleId}>{heading}</span>
                   </button>
               </H2>
               <section id={contentId}
                        aria-labelledby={titleId}
                        className={section}
                        data-open={String(open)}>
                   {children}
               </section>
           </Card>;
};
