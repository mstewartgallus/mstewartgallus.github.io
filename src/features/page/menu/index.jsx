import {
    Children,
    forwardRef,
    useReducer,
    useEffect,
    useDeferredValue,
    createContext, useContext,
    useRef, useCallback, useId
} from "react";
import { A, Pane } from "@features/ui";
import {
    menubutton,
    menulink,
    menulist,
    menuitem,
    outline as outlineClass
} from "./outline.module.css";

const reducer = (state, action) => {
    switch (action) {
    case 'escape':
        return 'escaped';

    case 'blur':
        return 'closed';

    case 'toggle':
        switch (state) {
        case 'escaped':
        case 'closed':
            return 'open';

        default:
            return 'escaped';
        }

    default:
        return state;
    }
};

const Item = createContext();
Item.displayName = 'Item';

const Selected = createContext();
Selected.displayName = 'Selected';

// We could use a menu or menubar role. However, we would need to
// support a number of menu commands and "menu" is really more of a
// desktop sort of menu.
export const Menu = forwardRef(function Menu({
    id,
    children,
    label
}, ref) {
    const buttonRef = useRef();

    const [state, dispatch] = useReducer(reducer, 'closed');

    const deferredState = useDeferredValue(state);

    const onKeyDown = useCallback(e => {
        switch (e.key) {
        case 'Escape':
            e.preventDefault();
            dispatch('escape');
            break;

        default:
            return;
        }
    }, []);

    // Defer focuses so they work with inert polyfill
    useEffect(() => {
        if (deferredState !== 'escaped') {
            return;
        }
        buttonRef.current.focus({preventScroll: true, focusVisible: true});
    }, [deferredState]);

    const onBlur = useCallback(e => {
        const { relatedTarget, currentTarget } = e;
        if (currentTarget.contains(relatedTarget)) {
            return;
        }
        dispatch('blur');
    }, []);

    const listRef = useRef();

    const onClick = useCallback(e => {
        dispatch('toggle');
    }, []);

    const menuId = useId();

    const open = state === 'open';
    return <div className={outlineClass}
                onBlur={open ? onBlur : null}
                onKeyDown={open ? onKeyDown : null}
           >
               <button
                   ref={elem => {
                       buttonRef.current = elem;
                       if (ref) {
                           ref.current = elem;
                       }
                   }}
                   className={menubutton}
                   id={id}
                   onClick={onClick}
                   aria-controls={menuId}
                   aria-expanded={String(open)}
               >
                   {label}
               </button>
               <Pane open={open}>
                   <nav id={menuId} aria-labelledby={id}>
                       <menu role="list" className={menulist} ref={listRef}>
                           <Selected.Provider value={open ? 0 : -1}>
                               {
                                   Children.map(children, (child, ix) =>
                                       <Item.Provider value={ix}>
                                           {child}
                                       </Item.Provider>
                                   )
                               }
                           </Selected.Provider>
                       </menu>
                   </nav>
               </Pane>
           </div>;
});

export const MenuA = props => {
    const item = useContext(Item);
    const selectedIndex = useContext(Selected);
    const selected = item === selectedIndex;

    const ref = useRef();
    const deferredSelected = useDeferredValue(selected);
    useEffect(() => {
        if (!deferredSelected) {
            return;
        }
        const { current } = ref;
        current.focus({preventScroll: true, focusVisible: true });
    }, [deferredSelected]);
    return <li role="listitem" className={menuitem}>
               <A className={menulink}
                  {...props} ref={ref} />
           </li>;
};
