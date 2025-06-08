import type { JSX } from 'react';
import './Icon.css';

export default function Icon({
    styles,
    path,
    iconAlt,
}: {
    styles: string;
    path: string;
    iconAlt: string;
}): JSX.Element {
    return <img className={styles} src={path} alt={iconAlt} />;
}
