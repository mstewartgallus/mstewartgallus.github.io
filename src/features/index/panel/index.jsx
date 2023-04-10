import { memo, useId, useDeferredValue, useTransition, useCallback, createContext, useContext } from "react";
import { useClient } from "@features/util";
import { Button, Card, H2 } from "@features/ui";
import { ClosedIcon } from "../closed-icon";
import { OpenIcon } from "../open-icon";
import {
    button, insideHeading, details,
    wrapper, wrapperInert, content, contentHidden, contentServer
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

const ContextProvider= memo(Context.Provider);
export const Accordion = ({children, value}) =>
<div>
    <ContextProvider value={value}>
        {children}
    </ContextProvider>
</div>;

const Heading = ({children, id, buttonId, open, ...props}) =>
<H2 id={id}
    className={insideHeading}>
    <Button
        id={buttonId}
        className={button}
        aria-expanded={String(open)}
        {...props}>
        <DetailsTriangle open={open} />
    </Button>
    <label htmlFor={buttonId}>{children}</label>
</H2>;

const Pane = ({children, id, open, ...props}) => {
    open = useDeferredValue(open);
    // Force open panels on server for better degradation
    const server = !useClient();
    if (server) {
        open = true;
    }
    return <div className={`${wrapper} ${open ? '' : wrapperInert}`}
                inert={open ? null : "inert"}>
               <nav id={id}
                    className={`${content} ${open ? '' : contentHidden} ${server ? contentServer : ''}`}
                    {...props}>
                   {children}
               </nav>
           </div>;
};

export const Panel = ({children, heading, value, onClick}) => {
    const [, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const selected = useContext(Context);

    const contentId = useId();
    const headingId = useId();

    const open = selected === value;

    return <Card>
               <Heading id={headingId}
                        buttonId={heading}
                        aria-controls={contentId}
                        open={open}
                        onClick={onClickWrapper}>
                   {heading}
               </Heading>
               <Pane id={contentId}
                     aria-labelledby={headingId}
                     open={open}>
                   {children}
               </Pane>
           </Card>;
};
