import { useId, useTransition, useCallback, createContext, useContext } from "react";
import { useClient } from "../../../features/util";
import { Button, Card, H2 } from "../../../features/ui";
import { ClosedIcon } from "../closed-icon";
import { OpenIcon } from "../open-icon";
import {
    button, insideHeading, details,
    wrapper, content
} from "./panel.module.css";

const IconItem = ({ icon, children }) =>
<span className={details}>
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
Context.displayName = 'Accordion';

export const Accordion = ({children, value}) =>
<div>
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
</div>;

export const Panel = ({children, heading, value, onClick}) => {
    const [_, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const id = useId();
    const selected = useContext(Context);
    const server = !useClient();

    const titleId = `${id}-title`;
    const contentId = `${id}-content`;

    // Force open panels on server for better degradation
    const open = selected === value;
    const serverOpen = server || open ;

    return <Card>
               <H2 className={insideHeading}>
                   <Button id={heading}
                           className={button}
                           aria-controls={contentId}
                           aria-expanded={String(open)}
                           onClick={onClickWrapper}>
                       <DetailsTriangle open={open} />
                   </Button>
                   <label id={titleId}
                          htmlFor={heading}>{heading}</label>
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
