import {
    createContext, forwardRef, useContext, useEffect,
    useId, useRef
} from "react";
import { Button } from "@features/ui";
import { Client } from "@features/util";
import {
    popover,
    wrapper,
    dialog,
    open as openClass, close as closeClass
} from "./pop-over.module.css";

const Context = createContext({ open: false, id: null });
Context.displayName = 'PopOver';

const { Provider } = Context;

const PopOverSummary = (props, ref) => {
    const { children } = props;
    const { open, id } = useContext(Context);

    return <Client fallback={children}>
               <Button
                   aria-controls={id}
                   aria-expanded={String(open)}
                   aria-haspopup="dialog"
                   tabIndex={open ? "-1" : "0"}
                   {...props}>
                   <span className={open ? openClass : closeClass}>
                       {children}
                   </span>
               </Button>
           </Client>;
};

const Dialog = ({ open, ...props}) => {
    const ref = useRef();
    useEffect(() => {
        const { current } = ref;
        if (open) {
            current.show();
        } else {
            current.open = false;
        }
        return () => {
            if (current.open) {
                current.open = false;
            }
        };
    }, [open]);
    return <dialog {...props} ref={ref} />;
};

const PopOver = ({
    children,
    summary,
    open,
    preview,
    ...props
}, ref) => {
    const id = useId();
    return <div className={popover} {...props} ref={ref}>
               <Provider value={{id, open}}>
                   {summary}
               </Provider>
               <div className={wrapper}>
                   <Dialog className={dialog}
                           id={id}
                           open={open}
                           data-preview={preview ? "preview" : null}>
                       {children}
                   </Dialog>
               </div>
           </div>;
};

const PopOverRef = forwardRef(PopOver);
const PopOverSummaryRef = forwardRef(PopOverSummary);

export { PopOverRef as PopOver, PopOverSummaryRef as PopOverSummary };
