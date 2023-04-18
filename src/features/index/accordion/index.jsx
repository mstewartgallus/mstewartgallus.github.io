import { createContext, useCallback, useContext,
         useReducer, useTransition } from "react";
import { Disclosure, Summary } from "../disclosure";

const initialState = {
    selection: null,
    hover: new Set(),
    focus: new Set()
};

const reducer = (state, action) => {
    const { type, value } = action;
    let { selection, hover, focus } = state;

    switch (type) {
    case 'click':
        selection = selection === value ? null : value;
        return { ...state, selection };

    case 'mouseover':
        hover = new Set(hover);
        hover.add(value);
        return { ...state, hover };

    case 'mouseout':
        hover = new Set(hover);
        hover.delete(value);
        return { ...state, hover };

    case 'focus':
        focus = new Set(focus);
        focus.add(value);
        return { ...state, focus };

    case 'blur':
        focus = new Set(focus);
        focus.delete(value);
        return { ...state, focus };

    default:
        return state;
    }
};

const Dispatch = createContext(() => {});
Dispatch.displayName = 'Dispatch';

const State = createContext();
State.displayName = 'State';

const Value = createContext();
Value.displayName = 'Value';

export const AccordionSummary = props => {
    const value = useContext(Value);
    const dispatch = useContext(Dispatch);

    const onClick = useCallback(() => dispatch({type: 'click', value}), [dispatch, value]);
    const onMouseOver = useCallback(() => dispatch({type: 'mouseover', value}), [dispatch, value]);
    const onMouseOut = useCallback(() => dispatch({type: 'mouseout', value}), [dispatch, value]);
    const onFocus = useCallback(() => dispatch({type: 'focus', value}), [dispatch, value]);
    const onBlur = useCallback(() => dispatch({type: 'blur', value}), [dispatch, value]);

    return <Summary
               onClick={onClick}
               onMouseOver={onMouseOver}
               onMouseOut={onMouseOut}
               onFocus={onFocus}
               onBlur={onBlur}
               {...props} />;
};

export const AccordionPanel = ({children, value, summary}) => {
    const { selection, hover, focus } = useContext(State);
    const open = value === selection;
    const willChange = hover.has(value) || focus.has(value);

    return <Disclosure
               open={open}
               willChange={willChange}
               summary={
                   <Value.Provider value={value}>
                       {summary}
                   </Value.Provider>
               }
           >
               {children}
           </Disclosure>;
};

export const Accordion = ({children}) => {
    const [, startTransition] = useTransition();
    const [state, dispatch] = useReducer(reducer, initialState);
    const dispatchTrans = useCallback(x => startTransition(() => dispatch(x)), []);

    return <Dispatch.Provider value={dispatchTrans}>
               <State.Provider value={state}>
                   {children}
               </State.Provider>
           </Dispatch.Provider>;
};
