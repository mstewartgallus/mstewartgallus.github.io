import { useMemo } from 'react';

interface Props {
    value: string;
    created: number;
    completed: number;
}

export const Complete = ({ value, created, completed }: Props) => {
    const format = useMemo(() => new Intl.DateTimeFormat(undefined, {
        dateStyle: "short",
        timeStyle: "short",
    }), []);

    const createdDate = format.format(new Date(created));
    const completedDate = format.format(new Date(completed));
    return <div>{value} {createdDate} {completedDate}</div>;
};
