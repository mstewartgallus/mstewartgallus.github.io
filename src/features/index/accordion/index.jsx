import { createContext, useCallback, useContext, useReducer, useTransition } from "react";
import { Disclosure, Summary } from "../disclosure";

const initState = null;

const reducer = (state, action) => {
    const { type } = action;
    switch (type) {
    case 'toggle': {
        const { category } = action;
        return state === category ? null : category;
    }

    default:
        return state;
    }
};

const Selection = createContext(null);
Selection.displayName = 'Selection';

const Toggle = createContext(null);
Toggle.displayName = 'Toggle';

const useSelected = value => {
    const selection = useContext(Selection);
    return value === selection;
};

const useToggleValue = value => {
    const toggle = useContext(Toggle);
    return useCallback(() => toggle(value), [toggle, value]);
};

const SelectionProvider = Selection.Provider;
const ToggleProvider = Toggle.Provider;

export const Accordion = ({children}) => {
    const [selection, dispatch] = useReducer(reducer, initState);
    const [, startTransition] = useTransition();
    const toggle = useCallback(value =>
        startTransition(() => dispatch({ type: 'toggle', category: value }))
    , []);

    return <SelectionProvider value={selection}>
               <ToggleProvider value={toggle}>
                   {children}
               </ToggleProvider>
           </SelectionProvider>;
};

const Value = createContext();
Value.displayName = 'Value';

export const AccordionSummary = ({id, children}) => {
    const value = useContext(Value);
    const onClick = useToggleValue(value);
    return <Summary id={id} onClick={onClick}>
               {children}
           </Summary>;
};

export const AccordionPanel = ({children, value, summary}) => {
    const selected = useSelected(value);
    return <Value.Provider value={value}>
               <Disclosure open={selected}
                           summary={summary}>
                   {children}
               </Disclosure>
           </Value.Provider>;
};
