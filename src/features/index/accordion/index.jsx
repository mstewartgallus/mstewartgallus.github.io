import { createContext, useCallback, useContext } from "react";
import { Disclosure, DisclosureSummary } from "@features/ui";
import { useNear } from "./use-near";
import { useAccordion } from "./use-accordion";
import { accordion } from "./accordion.module.css";

const Click = createContext(() => {});
Click.displayName = 'Click';

const Selection = createContext();
Selection.displayName = 'Selection';

const Value = createContext();
Value.displayName = 'Value';

const Event = createContext();
Event.displayName = 'Event';

export const AccordionSummary = props => {
    const value = useContext(Value);
    const click = useContext(Click);
    const {
        mouseOver,
        mouseOut,
        focus,
        blur
    } = useContext(Event);

    const onClick = useCallback(() => click(value), [click, value]);

    return <DisclosureSummary
               onClick={onClick}
               onMouseOver={mouseOver}
               onMouseOut={mouseOut}
               onFocus={focus}
               onBlur={blur}
               {...props} />;
};

export const AccordionPanel = ({children, value, summary}) => {
    const [willChange, event] = useNear();
    const selection = useContext(Selection);
    const open = value === selection;

    return <Disclosure
               open={open}
               willChange={willChange}
               summary={
                   <Event.Provider value={event}>
                       <Value.Provider value={value}>
                           {summary}
                       </Value.Provider>
                   </Event.Provider>
               }
           >
               {children}
           </Disclosure>;
};

export const Accordion = ({children}) => {
    const [selection, click] = useAccordion();

    return <div className={accordion}>
               <Click.Provider value={click}>
                   <Selection.Provider value={selection}>
                       {children}
                   </Selection.Provider>
               </Click.Provider>
           </div>;
};
