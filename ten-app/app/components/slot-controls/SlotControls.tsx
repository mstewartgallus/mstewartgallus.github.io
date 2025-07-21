import type { FormEvent } from "react";
import { useCallback, useId } from 'react';
import { Button } from "../button/Button";
import { Icon } from "../icon/Icon";

interface CompleteProps {
    disabled: boolean;
    onComplete: () => void;
};

export const CompleteForm = ({ disabled, onComplete }: CompleteProps) => {
    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        onComplete();
    }, [onComplete]);

    const id = useId();
    return <form id={id} onSubmit={onSubmit} action="#">
        <Button disabled={disabled} aria-label="Complete Task" value="complete">
            <Icon>✔</Icon>
        </Button>
     </form>;
};

interface CreateProps {
    disabled: boolean;
    onCreate: () => void;
};

export const CreateForm = ({ disabled, onCreate }: CreateProps) => {
    const onSubmit = useCallback((e: FormEvent) => {
        e.preventDefault();
        onCreate();
    }, [onCreate]);

    const id = useId();
    return <form id={id} onSubmit={onSubmit} action="#">
        <Button disabled={disabled} aria-label="Create Task" value="create">
            <Icon>+</Icon>
        </Button>
     </form>;
};
