import type { JSX } from 'react';

export default function Button({
    styles,
    content,
}: {
    styles: string;
    content: string;
}): JSX.Element {
    return <button className={styles}>{content}</button>;
}
