import { useId, useTransition, useCallback } from "react";
import { H2, Pane, PushButton } from "@features/ui";
import { details, button, insideHeading } from "./panel.module.css";

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
