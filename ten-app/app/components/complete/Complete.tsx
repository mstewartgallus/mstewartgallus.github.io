import { useMemo } from 'react';

import styles from './Complete.module.css';

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

    return <div className={styles.complete}>
        {value}
        <div className={styles.dates}>
            <span>Created: {createdDate}</span>
            <span>Completed: {completedDate}</span>
        </div>
    </div>;
};
