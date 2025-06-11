import type { JSX } from 'react';

export default function NavBar({
    children,
    styles,
}: {
    children: React.ReactNode;
    styles?: string;
}): JSX.Element {
    return <nav className={styles}>{children}</nav>;
}
