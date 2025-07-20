import type { FormEvent } from "react";
import { useCallback, useId } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface Props {
    disabled: boolean;
    onCreate?: () => void;
    onComplete?: () => void;
};

export const SlotControls = ({ disabled, onCreate, onComplete }: Props) => {
    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();

        const value = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement).value;
        switch (value) {
        case 'complete':
            if (onComplete) {
                e.preventDefault();
                onComplete();
            }
            break;

            case 'create':
                if (onCreate) {
                    e.preventDefault();
                    onCreate();
                }
                break;

        default:
            return;
        }
    }, [onComplete, onCreate]);

    const id = useId();
    return <form id={id} onSubmit={onSubmit} action="#">
        {
            onCreate &&
                <Button disabled={disabled} aria-label="Create Task" value="create">
                    <Icon>+</Icon>
                </Button>
        }
        {
            onComplete &&
                <Button disabled={disabled} aria-label="Complete Task" value="complete">
                    <Icon>✔</Icon>
                </Button>
        }
     </form>;
};
