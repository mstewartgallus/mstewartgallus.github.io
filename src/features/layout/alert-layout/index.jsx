import { useCallback, useRef, useId, useEffect } from "react";
import { navigate } from "gatsby";
import { Button, Card, Hgroup } from "../../../features/ui";
import { dialog, header } from "./alert.module.css";

export const AlertLayout = ({children, heading}) => {
    const ref = useRef();
    const button = useRef();
    const id = useId();
    useEffect(() => {
        const { current: dialog } = ref;
        if (!dialog) {
            return;
        }

        dialog.showModal();
        return () => dialog.close('useEffect');
    }, [ref]);

    const onClose = useCallback(async e => {
        e.preventDefault();
        if (e.target.returnValue !== 'back') {
            return;
        }
        await navigate(-1);
    }, []);
    const onCancel = useCallback(async e => {
        e.preventDefault();
        await navigate(-1);
    }, []);
    return <dialog className={dialog}
                   role="alertdialog"
                   ref={ref}
                   aria-labelledby={id}
                   onClose={onClose}
                   onCancel={onCancel}>
               <Card>
                   <main aria-labelledby={id}>
                       <header className={header}>
                           <Hgroup id={id}>
                               {heading}
                           </Hgroup>
                           <form method="dialog">
                               <Button ref={button} value="back">Back</Button>
                           </form>
                       </header>
                       {children}
                   </main>
               </Card>
           </dialog>;
};

export default AlertLayout;
