import { useId, useTransition, useCallback } from "react";
import { H2, PushButton } from "@features/ui";
import {
    details, disclosure, button, insideHeading,
    wrapper, wrapperInert, content, contentHidden
} from "./panel.module.css";

const Pane = ({children, open}) => {
    const wrapperClass = [wrapper, open ? '' : wrapperInert].join(' ');
    const contentClass = [content, open ? '' : contentHidden].join(' ');
    return <div className={disclosure}>
               <div className={wrapperClass} inert={open ? null : "inert"}>
                   <div className={contentClass}>
                       {children}
                   </div>
               </div>
           </div>;
};

const Heading = ({children, id, open, ...props}) =>
      <>
          <span className={details}>
              <PushButton
                  id={id}
                  open={open}
                  {...props}>
                  <span className={button}>
                        {open ? "Close" : "Open"}
                  </span>
              </PushButton>
          </span>
          <label htmlFor={id}>{children}</label>
      </>;

export const PanelClient = ({children, id, heading, open, onClick}) => {
    const [, startTransition] = useTransition();
    const onClickWrapper = useCallback(e => {
        e.preventDefault();
        startTransition(() => onClick(e));
    }, [onClick]);

    const contentId = useId();
    return <>
               <H2 className={insideHeading}>
                   <Heading id={id}
                            aria-controls={contentId}
                            open={open}
                            onClick={onClickWrapper}>
                       {heading}
                   </Heading>
               </H2>
               <Pane open={open}>
                   <nav id={contentId} aria-labelledby={id}>
                       {children}
                   </nav>
               </Pane>
           </>;
};

export default PanelClient;
