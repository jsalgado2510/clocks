'use client';
import styles from './clock.module.css';

const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
});

export default function Clock({ time }: { time: Date }) {

    return (
        <div className={styles.clock}>
            <h1>{formatter.format(time)}</h1>
        </div>
    );
}

