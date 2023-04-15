import { useId } from "react";
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
    const contentId = useId();
    return <nav aria-labelledby={id}>
               <H2 className={insideHeading}>
                   <Heading id={id}
                            aria-controls={contentId}
                            open={open}
                            onClick={onClick}>
                       {heading}
                   </Heading>
               </H2>
               <Pane open={open}>
                   <div id={contentId}>
                       {children}
                   </div>
               </Pane>
           </nav>;
};

export default PanelClient;
