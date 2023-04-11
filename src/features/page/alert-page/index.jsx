import { useCallback, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { Theme, Button, Card, Hgroup } from "@features/ui";
import { H1 } from "../h1.jsx";
import { inner, dialog, header } from "./alert.module.css";

const CloseButton = ({children, ...props}) => {
    return <Button {...props}>{children}</Button>;
};

const Dialog = ({children, ...props}) => {
    const ref = useRef();
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
    return <dialog className={dialog}
                   ref={ref}
                   onClose={onClose}
                   onCancel={onCancel}
                   open="open"
                   {...props}>
               <div className={inner}>
                   {children}
               </div>
           </dialog>;
};

// FIXME lazy load Alert dialog code and replace with different code
// for server
export const AlertPage = ({children, heading}) =>
<Theme>
    <main aria-labelledby="content">
        <Dialog role="alertdialog"
                aria-labelledby="content">
            <Card>
                <header className={header}>
                    <Hgroup>
                        <H1>{heading}</H1>
                    </Hgroup>
                    <form method="dialog">
                        <CloseButton value="back">Back</CloseButton>
                    </form>
                </header>
                {children}
            </Card>
        </Dialog>
    </main>
</Theme>;

export default AlertPage;
