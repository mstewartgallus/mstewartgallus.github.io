import {
    forwardRef, createContext, useContext, useCallback,
    useMemo, useImperativeHandle, useTransition,
    useEffect, useReducer, useRef
} from "react";

const reducer = keys => {
    const { length } = keys;
    return (selection, action) => {
        const { type } = action;
        let ix = keys.indexOf(selection);
        if (ix < 0) {
            selection = null;
        }
        switch (type) {
        case 'left':
            if (ix < 0) {
                return keys[length - 1];
            }
            if (ix === 0) {
                return keys[length - 1];
            }
            return keys[ix - 1];

        case 'right':
            if (ix < 0) {
                return keys[0];
            }
            if (ix >= length - 1) {
                return keys[0];
            }
            return keys[ix + 1];

        case 'home':
            return keys[0];

        case 'end':
            return keys[length - 1];

        case 'select':
            return action.key;

        case 'blur':
            return null;

        default:
            return selection;
        }
    };
};

const Context = createContext(null);
Context.displayName = 'FocusGroup';

const { Provider } = Context;

const useFocusGroup = keys => {
    const [,startTransition] = useTransition();
    const r = useMemo(() => reducer(keys), [keys]);
    const [selection, dispatch] = useReducer(r, null);
    const onBlur = useCallback(e => {
        const { relatedTarget, currentTarget } = e;
        if (currentTarget.contains(relatedTarget)) {
            return;
        }
        dispatch({ type: 'blur' });
    }, []);

    const onKeyDown = useCallback(e => {
        const { currentTarget, target, key, altKey, ctrlKey, metaKey, shiftKey } = e;
        if (altKey || ctrlKey || metaKey || shiftKey) {
            return;
        }

        switch (key) {
        case 'Enter':
            if (target !== currentTarget) {
                return;
            }
            startTransition(() => dispatch({ type: 'right' }));
            break;

        case 'ArrowRight':
        case 'ArrowDown':
            startTransition(() => dispatch({ type: 'right' }));
            break;

        case 'ArrowLeft':
        case 'ArrowUp':
            startTransition(() => dispatch({ type: 'left' }));
            break;

        case 'Home':
            startTransition(() => dispatch({ type: 'home' }));
            break;
        case 'End':
            startTransition(() => dispatch({ type: 'end' }));
            break;
        default:
            return;
        }

        e.preventDefault();
    }, []);

    const selected = null === selection;
    const tabIndex = selected ? "0" : "-1" ;

    return [
        { tabIndex, onBlur, onKeyDown },
        key => {
            const selected = key === selection;
            const onFocus = () => {
                if (key === selection) {
                    return;
                }
                // Can't delay this if we click on a skip link
                dispatch({ type: 'select', key });
            };
            const tabIndex = selected ? "0" : "-1";
            return { selected, tabIndex, onFocus };
        }
    ];
};

const FocusGroup = (props, ref) => {
    const { children, keys } = props;
    const [focusGroupProps, focusProps] = useFocusGroup(keys);
    return <div role="group" {...props} {...focusGroupProps} ref={ref}>
               <Provider value={focusProps}>
                   {children}
               </Provider>
           </div>;
};

export const useFocusItem = (ref, key) => {
    const myref = useRef(null);
    useImperativeHandle(ref, () => myref.current, []);

    const cb = useContext(Context);
    const { selected, ...props } = useMemo(() => cb(key), [cb, key]);

    useEffect(() => {
        if (!selected) {
            return;
        }
        const { current } = myref;
        current.focus({ preventScroll: true, focusVisible: true });
        current.scrollIntoView({ inline: 'center', block: 'center' });
    }, [selected]);

    return { ref: myref, ...props };
};

const FocusGroupRef = forwardRef(FocusGroup);

export { FocusGroupRef as FocusGroup };
