import { useId, useReducer, useDeferredValue, useCallback, useTransition } from "react";
import { H2, Pane, PushButton } from "@features/ui";
import { details, button, insideHeading } from "./disclosure.module.css";

const initialState = {
    hover: false,
    focus: false
};

const reducer = (state, action) => {
    switch (action) {
    case 'mouseover':
        return { ...state, hover: true };
    case 'mouseout':
        return { ...state, hover: false };
    case 'focus':
        return { ...state, focus: true };
    case 'blur':
        return { ...state, focus: false };
    default:
        return state;
    }
};

export const DisclosureClient = ({children, id, heading, open, onClick}) => {
    const [{hover, focus}, dispatch] = useReducer(reducer, initialState);
    const [,startTransition] = useTransition();
    const onMouseOver = useCallback(() => startTransition(() => dispatch('mouseover')), []);
    const onMouseOut = useCallback(() => startTransition(() => dispatch('mouseout')), []);
    const onFocus = useCallback(() => startTransition(() => dispatch('focus')), []);
    const onBlur = useCallback(() => startTransition(() => dispatch('blur')), []);
    const willChange = hover || focus;

    const contentId = useId();

    const deferredOpen = useDeferredValue(open);

    return <nav aria-labelledby={id}>
               <H2 className={insideHeading}
                   onMouseOver={onMouseOver}
                   onMouseOut={onMouseOut}
                   onFocus={onFocus}
                   onBlur={onBlur}>
                   <span className={details}
                   >
                       <PushButton
                           id={id}
                           open={open}
                           aria-controls={contentId}
                           onClick={onClick}
                       >
                           <span className={button}>
                               {deferredOpen ? "Close" : "Open"}
                           </span>
                       </PushButton>
                   </span>
                   <label htmlFor={id}>{heading}</label>
               </H2>
               <Pane open={open} willChange={willChange}>
                   <div id={contentId}>
                       {children}
                   </div>
               </Pane>
           </nav>;
};

export default DisclosureClient;
