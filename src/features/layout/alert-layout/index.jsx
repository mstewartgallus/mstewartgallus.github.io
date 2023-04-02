import { useCallback, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { Button, Card, Hgroup } from "../../../features/ui";
import { useFocus } from "../listeners.jsx";
import { H1 } from "../h1.jsx";
import { dialog, header } from "./alert.module.css";

const CloseButton = ({children, ...props}) => {
    const button = useFocus();
    return <Button ref={button} {...props}>{children}</Button>;
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
               {children}
           </dialog>;
};

export const AlertLayout = ({children, heading}) =>
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
</main>;

export default AlertLayout;
