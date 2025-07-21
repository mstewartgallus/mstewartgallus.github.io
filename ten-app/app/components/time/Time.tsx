import { useMemo } from 'react';

interface TimeProps {
    children: number;
};

const formatter = new Intl.DateTimeFormat(undefined, {
    dateStyle: "short",
    timeStyle: "short",
});

export const Time = ({ children }: TimeProps) => {
    // FIXME cleanup dateTime use
    const { formatted, utc } = useMemo(() => {
        const date = new Date(children);
        const formatted = formatter.format(date);
        const utc = date.toUTCString();
        return { formatted, utc };
    }, [children]);
    return <time dateTime={utc}>{formatted}</time>;
};
