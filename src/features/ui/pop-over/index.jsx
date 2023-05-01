import { createContext, forwardRef, useContext, useId } from "react";
import { Client } from "@features/util";
import { Button } from "../button";
import { Dialog } from "../dialog";
import { open as openClass, close as closeClass } from "./pop-over.module.css";

const Context = createContext({ open: false, id: null });
Context.displayName = 'PopOver';
const { Provider } = Context;

const Open = createContext(false);
Open.displayName = 'Open';
const { Provider: OpenProvider } = Open;

export const usePopOverOpen = () => useContext(Open);

export const PopOverSummary = forwardRef((props, ref) => {
    const { children } = props;
    const { open, id } = useContext(Context);

    return <Client fallback={children}>
               <Button
                   aria-controls={id}
                   aria-expanded={String(open)}
                   aria-haspopup="dialog"
                   tabIndex={open ? "-1": "0"}
                   {...props}>
                   <span className={open ? openClass : closeClass}>
                       {children}
                   </span>
               </Button>
           </Client>;
});
PopOverSummary.displayName = `PopOverSummary`;

export const PopOver = forwardRef(({
    children,
    summary,
    open,
    preview,
    onCancel,
    onClose,
    ...props
}, ref) => {
    const id = useId();
    return <div {...props}>
               <Provider value={{id, open}}>
                   {summary}
               </Provider>
               <OpenProvider value={open}>
                   <Dialog id={id} open={open} preview={preview} ref={ref}
                           onCancel={onCancel}
                           onClose={onClose}>
                       {children}
                   </Dialog>
               </OpenProvider>
           </div>;
});
PopOver.displayName = `PopOver`;
