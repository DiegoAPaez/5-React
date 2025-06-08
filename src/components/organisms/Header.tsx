import Button from '../atoms/Button/Button.tsx';
import Link from '../atoms/Link/Link.tsx';
import NavBar from '../molecules/NavBar/NavBar.tsx';
import Logo from '../atoms/Logo/Logo.tsx';
import Icon from '../atoms/Icon/Icon.tsx';
import bookmarkLogo from '../../assets/images/logo-bookmark.svg';
import burgerIcon from '../../assets/images/icon-hamburger.svg';
import closeIcon from '../../assets/images/icon-close.svg';
import './Header.css';

export default function Header() {
    return (
        <header>
            <Logo source={bookmarkLogo} alt="Bookmark" type="image/svg+xml" />

            <NavBar styles="">
                <Link ref="#features" styles="nav-bar--link" content="Features" />
                <Link ref="#pricing" styles="nav-bar--link" content="Pricing" />
                <Link ref="#contact" styles="nav-bar--link" content="Contact" />
                <Button styles="nav-bar--login" content="Login" />
                <Icon styles="nav-bar-icon-hamburger" path={burgerIcon} iconAlt="Burger Menu" />
                <Icon styles="nav-bar-icon-close" path={closeIcon} iconAlt="Close Menu" />
            </NavBar>
        </header>
    );
}
