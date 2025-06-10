import type { JSX } from 'react';
import './NavBar.css';

export default function NavBar({
    children,
    styles,
}: {
    children: React.ReactNode;
    styles?: string;
}): JSX.Element {
    return <nav className={styles}>{children}</nav>;
}
