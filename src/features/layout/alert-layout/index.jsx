import { useCallback, useRef, useId, useEffect } from "react";
import { navigate } from "gatsby";
import { Button, Card, Hgroup } from "../../../features/ui";
import { useFocus } from "../listeners.jsx";
import { dialog, header } from "./alert.module.css";

export const AlertLayout = ({children, heading}) => {
    const button = useFocus();
    const ref = useRef();
    const id = useId();
    useEffect(() => {
        const { current: dialog } = ref;
        if (!dialog) {
            return;
        }

        dialog.close('closeformodal');
        dialog.showModal();
        return () => dialog.close('useEffect');
    }, []);

    const onClose = useCallback(async e => {
        e.preventDefault();
        if (e.target.returnValue !== 'back') {
            return;
        }
        await navigate('/');
    }, []);
    const onCancel = useCallback(async e => {
        e.preventDefault();
        await navigate('/');
    }, []);
    return <main aria-labelledby={id}>
               <dialog className={dialog}
                       role="alertdialog"
                       ref={ref}
                       aria-labelledby={id}
                       onClose={onClose}
                       onCancel={onCancel}
                       open="open">
                   <Card>
                       <header className={header}>
                           <Hgroup id={id}>
                               {heading}
                           </Hgroup>
                           <form method="dialog">
                               <Button ref={button} value="back">Back</Button>
                           </form>
                       </header>
                       {children}
                   </Card>
               </dialog>
           </main>;
};

export default AlertLayout;
