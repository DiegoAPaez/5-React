import type { JSX } from 'react';

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
