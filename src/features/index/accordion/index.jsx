import { createContext, useCallback, useContext, useReducer, useTransition } from "react";
import { Disclosure } from "../disclosure";

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

const useSelection = () => useContext(Selection);
const useToggle = () => useContext(Toggle);

const SelectionProvider = Selection.Provider;
const ToggleProvider = Toggle.Provider;

const useSelected = value => {
    const selection = useSelection();
    return value === selection;
};

const useToggleValue = value => {
    const toggle = useToggle();
    return useCallback(() => toggle(value), [toggle, value]);
};

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

export const AccordionPanel = ({id, children, value, heading}) => {
    const selected = useSelected(value);
    const onClick = useToggleValue(value);

    return <Disclosure id={id} heading={heading} open={selected} onClick={onClick}>
               {children}
           </Disclosure>;
};
