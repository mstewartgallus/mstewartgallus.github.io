import { Time } from '../time/Time';

import styles from './Complete.module.css';

interface Props {
    value: string;
    created: number;
    completed: number;
}

export const Complete = ({ value, created, completed }: Props) =>
    <div className={styles.complete}>
        {value}
        <div className={styles.dates}>
            <span>Created: <Time>{created}</Time></span>
            <span>Completed: <Time>{completed}</Time></span>
        </div>
    </div>;
