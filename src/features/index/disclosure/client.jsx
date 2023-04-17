import {
    createContext, useContext,
    useMemo, useId, useReducer, useTransition
} from "react";
import { Pane, PushButton } from "@features/ui";
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

// Have a rarely changing context and a separate context for changing
// content
const Context = createContext({
    ariaControls: null,
    onMouseOver: () => {},
    onMouseOut: () => {},
    onFocus: () => {},
    onBlur: () => {}
});
Context.displayName = 'Disclosure';

const Open = createContext(false);
Open.displayName = 'Open';

export const Summary = ({ id, children, onClick }) => {
    const open = useContext(Open);

    const {
        ariaControls,
        onMouseOver,
        onMouseOut,
        onFocus,
        onBlur
    } = useContext(Context);

    return <span className={insideHeading}
                 onMouseOver={onMouseOver}
                 onMouseOut={onMouseOut}
                 onFocus={onFocus}
                 onBlur={onBlur}>
               <span className={details}>
                   <PushButton
                       id={id}
                       open={open}
                       aria-controls={ariaControls}
                       onClick={onClick}
                   >
                       <span className={button}>
                           {open ? "Close" : "Open"}
                       </span>
                   </PushButton>
               </span>
               <label htmlFor={id}>{children}</label>
           </span>;
};


export const Disclosure = ({children, id, summary, open}) => {
    const contentId = useId();
    const [{hover, focus}, dispatch] = useReducer(reducer, initialState);

    const [,startTransition] = useTransition();

    const willChange = hover || focus;

    const context = useMemo(() => ({
        ariaControls: contentId,
        onMouseOver: () => startTransition(() => dispatch('mouseover')),
        onMouseOut: () => startTransition(() => dispatch('mouseout')),
        onFocus: () => startTransition(() => dispatch('focus')),
        onBlur: () => startTransition(() => dispatch('blur'))
    }), [contentId]);
    return <Context.Provider value={context}>
               <Open.Provider value={open}>
                   {summary}
                   <div id={contentId}>
                       <Pane open={open} willChange={willChange}>
                           {children}
                       </Pane>
                   </div>
               </Open.Provider>
           </Context.Provider>;
};
