import { useId, useTransition, useCallback, createContext, useContext } from "react";
import { useClient } from "../../features/util";
import { Button, Card, H2 } from "../../features/ui";
import { ClosedIcon } from "./closed-icon";
import { OpenIcon } from "./open-icon";
import {
    insideHeading, details,
    wrapper, content
} from "./panel.module.css";

const IconItem = ({ icon, children }) =>
<span class={details}>
    <span aria-hidden="true">{icon}</span>
    <span>{children}</span>
</span>;

const DetailsTriangle = ({ open }) =>
<IconItem
    icon={
        open ? <OpenIcon /> : <ClosedIcon />
    }>
    {
        open ? "Close" : "Open"
    }
</IconItem>;

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
    const server = !useClient();

    const contentId = `${id}-content`;
    const titleId = `${id}-title`;
    const buttonId = `${id}-button`;

    // Force open panels on server for better degradation
    const open = selected === value;
    const serverOpen = server || open ;

    return <Card>
               <H2>
                   <div className={insideHeading}>
                       <Button id={buttonId}
                               aria-controls={contentId}
                               aria-expanded={String(open)}
                               onClick={onClickWrapper}>
                           <DetailsTriangle open={open} />
                       </Button>
                       <label id={titleId}
                              htmlFor={buttonId}>{heading}</label>
                   </div>
               </H2>
               <div className={wrapper}
                    aria-hidden={serverOpen ? null : "true"}
                    inert={serverOpen ? null : "inert"}>
                   <nav id={contentId}
                        aria-labelledby={titleId}
                        hidden={serverOpen ? null : "hidden"}
                        data-server={server ? "server" : null}
                        className={content}>
                       {children}
                   </nav>
               </div>
           </Card>;
};
