import type { JSX } from 'react';

export default function Logo({
    source,
    alt,
    type,
    styles,
}: {
    source: string;
    alt: string;
    type: string;
    styles?: string;
}): JSX.Element {
    return (
        <picture className={styles}>
            <source srcSet={source} type={type} />
            <img src={source} alt={alt} />
        </picture>
    );
}
