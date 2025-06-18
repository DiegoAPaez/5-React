import type { JSX } from 'react';

export default function Icon({
    styles,
    path,
    iconAlt,
    onClick,
}: {
    styles?: string;
    path: string;
    iconAlt: string;
    onClick?: () => void;
}): JSX.Element {
    return <img onClick={onClick} className={styles} src={path} alt={iconAlt} />;
}
