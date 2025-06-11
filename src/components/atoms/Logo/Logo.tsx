import type { JSX } from 'react';

export default function Logo({
    source,
    alt,
    type,
}: {
    source: string;
    alt: string;
    type: string;
}): JSX.Element {
    return (
        <picture>
            <source srcSet={source} type={type} />
            <img src={source} alt={alt} />
        </picture>
    );
}
