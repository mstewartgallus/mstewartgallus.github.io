import { useId, useTransition, useCallback } from "react";
import { Button, H2 } from "@features/ui";
import { ClosedIcon } from "../closed-icon";
import { OpenIcon } from "../open-icon";
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
        open ? <OpenIcon /> : <ClosedIcon />
    }>
    {
        open ? "Close" : "Open"
    }
</IconItem>;

const Heading = ({children, id, open, ...props}) =>
<H2 className={insideHeading}>
    <Button
        id={id}
        className={button}
        aria-expanded={String(open)}
        {...props}>
        <DetailsTriangle open={open} />
    </Button>
    <label htmlFor={id}>{children}</label>
</H2>;

export const PanelClient = ({children, id, heading, open, onClick}) => {
    const [, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const contentId = useId();

    return <>
               <Heading id={id}
                        aria-controls={contentId}
                        open={open}
                        onClick={onClickWrapper}>
                   {heading}
               </Heading>
               <div className={disclosure}>
                   <div className={`${wrapper} ${open ? '' : wrapperInert}`}
                        inert={open ? null : "inert"}>
                       <nav id={contentId}
                            aria-labelledby={id}
                            className={`${content} ${open ? '' : contentHidden}`}>
                           {children}
                       </nav>
                   </div>
               </div>
           </>;
};

export default PanelClient;
