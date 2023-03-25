import { useId, useTransition, useCallback, createContext, useContext } from "react";
import { useClient } from "../../features/util";
import { Button, Card, H2 } from "../../features/ui";
import {
    open, closed,
    insideHeading, details,
    heading as headingClass, wrapper, content
} from "./panel.module.css";

const OpenIcon = () => <span aria-hidden="true" className={open} />;
const ClosedIcon = () => <span aria-hidden="false" className={closed} />;

const DetailsTriangle = ({ open }) =>
<span aria-hidden="true" class={details}>
    {
        open ? <OpenIcon /> : <ClosedIcon />
    }
    {
        open ? "Collapse" : "Expand"
    }
</span>;

const Context = createContext(null);

export const Accordion = ({children, value}) =>
<div>
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
</div>;

export const Panel = ({children, heading, value, onClick}) => {
    const [isPending, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const id = useId();
    const selected = useContext(Context);
    const client = useClient();

    const contentId = `${id}-content`;
    const titleId = `${id}-title`;
    const buttonId = `${id}-button`;

    // Force open panels on server for better degradation
    const open = client ? selected === value : true;

    return <Card>
               <div className={headingClass}>
                   <H2 id={titleId} onClick={onClickWrapper}>
                       <div className={insideHeading}>
                           <Button id={buttonId}
                                   aria-controls={contentId}
                                   aria-expanded={String(open)}
                                   onClick={onClickWrapper}>
                               <DetailsTriangle open={open} />
                           </Button>
                           <label htmlFor={buttonId}>{heading}</label>
                       </div>
                   </H2>
               </div>
               <div className={wrapper}
                    aria-hidden={open ? null : "true"}
                    inert={open ? null : "inert"}>
                   <nav id={contentId}
                        aria-labelledby={titleId}
                        hidden={open ? null : "hidden"}
                        className={content}>
                       {children}
                   </nav>
               </div>
           </Card>;
};
