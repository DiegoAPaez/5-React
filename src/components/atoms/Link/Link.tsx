import type { JSX } from 'react';
import './Link.css';

export default function Link({
    ref,
    styles,
    content,
}: {
    ref: string;
    styles: string;
    content: string;
}): JSX.Element {
    return (
        <a href={ref} className={styles}>
            {content}
        </a>
    );
}
