import { useId, useTransition, useCallback } from "react";
import { Button, H2 } from "@features/ui";
import { Icon } from "../icon";
import {
    disclosure, button, insideHeading, details,
    wrapper, wrapperInert, content, contentHidden
} from "./panel.module.css";

const IconItem = ({ icon, children }) =>
<span className={details}>
    <span aria-hidden="true">{icon}</span>
    <span>{children}</span>
</span>;

const DetailsTriangle = ({ open }) =>
<IconItem
    icon={
        <Icon open={open} />
    }>
    {
        open ? "Close" : "Open"
    }
</IconItem>;

const Heading = ({children, id, open, ...props}) =>
<>
    <Button
        id={id}
        className={button}
        aria-expanded={String(open)}
        {...props}>
        <DetailsTriangle open={open} />
    </Button>
    <label htmlFor={id}>{children}</label>
</>;

export const PanelClient = ({children, id, heading, open, onClick}) => {
    const [, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const contentId = useId();

    const wrapperClass = [wrapper, open ? '' : wrapperInert].join(' ');
    const contentClass = [content, open ? '' : contentHidden].join(' ');
    return <>
               <H2 className={insideHeading}>
                   <Heading id={id}
                            aria-controls={contentId}
                            open={open}
                            onClick={onClickWrapper}>
                       {heading}
                   </Heading>
               </H2>
               <div className={disclosure}>
                   <div className={wrapperClass} inert={open ? null : "inert"}>
                       <nav id={contentId} aria-labelledby={id} className={contentClass}>
                           {children}
                       </nav>
                   </div>
               </div>
           </>;
};

export default PanelClient;
