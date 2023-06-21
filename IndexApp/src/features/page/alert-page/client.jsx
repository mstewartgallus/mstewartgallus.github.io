import { useCallback, useRef, useEffect } from "react";
import { RootScroller } from "@features/root-scroller";
import { navigate } from "@features/util";
import { H1, Button, Card, Hgroup, Theme } from "@features/ui";
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
        if (e.target.returnValue !== 'back') {
            return;
        }
        await navigate('/');
    }, []);
    const onCancel = useCallback(async e => {
        await navigate('/');
    }, []);
    return <dialog className={dialog}
                   onClose={onClose}
                   onCancel={onCancel}
                   {...props}
                   ref={ref}>
               {children}
           </dialog>;
};

const AlertPageClient = ({children, heading}) =>
<Theme>
    <RootScroller>
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
    </RootScroller>
</Theme>;

export default AlertPageClient;
