import type { JSX } from 'react';
import './Logo.css';

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
        <div>
            <picture>
                <source srcSet={source} type={type} />
                <img src={source} alt={alt} />
            </picture>
        </div>
    );
}
