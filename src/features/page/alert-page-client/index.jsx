import { useCallback, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { Theme, Button, Card, Hgroup } from "@features/ui";
import { H1 } from "../h1.jsx";
import { dialog, header } from "./alert.module.css";

const Dialog = ({children, ...props}) => {
    const ref = useRef();
    useEffect(() => {
        const { current: dialog } = ref;
        if (!dialog) {
            return;
        }

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
                   {...props}>
               {children}
           </dialog>;
};

export const AlertPageClient = ({children, heading}) =>
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
                        <Button value="back">Back</Button>
                    </form>
                </header>
                {children}
            </Card>
        </Dialog>
    </main>
</Theme>;

export default AlertPageClient;
