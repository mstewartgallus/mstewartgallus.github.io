import type { FormEvent } from "react";
import { useMemo, useId } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface CompleteProps {
    disabled: boolean;
    onComplete?: () => void;
};

export const CompleteForm = ({ disabled, onComplete }: CompleteProps) => {
    const onSubmit = useMemo(() => {
        if (!onComplete) {
            return;
        }
        return (e: FormEvent) => {
            e.preventDefault();
            onComplete();
        };
    }, [onComplete]);

    const id = useId();
    return <form id={id} onSubmit={onSubmit} action="#">
        <Button disabled={disabled} aria-label="Complete Thing" value="complete">
            <Icon>✔</Icon>
        </Button>
     </form>;
};

interface CreateProps {
    disabled: boolean;
    onCreate?: () => void;
};

export const CreateForm = ({ disabled, onCreate }: CreateProps) => {
    const onSubmit = useMemo(() => {
        if (!onCreate) {
            return;
        }
        return (e: FormEvent) => {
            e.preventDefault();
            onCreate();
        };
    }, [onCreate]);

    const id = useId();
    return <form id={id} onSubmit={onSubmit} action="#">
        <Button disabled={disabled} aria-label="Create Thing" value="create">
            <Icon>+</Icon>
        </Button>
     </form>;
};
