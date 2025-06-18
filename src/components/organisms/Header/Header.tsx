import Button from '../../atoms/Button/Button.tsx';
import Link from '../../atoms/Link/Link.tsx';
import NavBar from '../../molecules/NavBar/NavBar.tsx';
import Logo from '../../atoms/Logo/Logo.tsx';
import Icon from '../../atoms/Icon/Icon.tsx';
import bookmarkLogo from '../../../assets/images/logo-bookmark.svg';
import bookmarkWhiteLogo from '../../../assets/images/logo-bookmark-white.svg';
import burgerIcon from '../../../assets/images/icon-hamburger.svg';
import closeIcon from '../../../assets/images/icon-close.svg';
import { useState } from 'react';

export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false);
    const [menuIcon, setMenuIcon] = useState(burgerIcon);
    const [imageAlt, setImageAlt] = useState('Burger Menu');
    const [logo, setLogo] = useState(bookmarkLogo);
    const [navBarStyles, setNavBarStyles] = useState('hidden');
    const [containerPosition, setContainerPosition] = useState('');

    function handleBurgerClick() {
        setBurgerOpen(open => !open);
        setMenuIcon(() => (burgerOpen ? closeIcon : burgerIcon));
        setImageAlt(() => (burgerOpen ? 'Close Menu' : 'Burger Menu'));
        setLogo(() => (burgerOpen ? bookmarkWhiteLogo : bookmarkLogo));
        setNavBarStyles(() =>
            burgerOpen
                ? 'w-full h-full top-0 left-0 fixed flex flex-col justify-center gap-10 z-10'
                : 'hidden',
        );
        setContainerPosition(() => (burgerOpen ? 'relative' : ''));
    }

    return (
        <header className="max-w-[1280px] mx-auto my-5 py-10 text-gray-700">
            <div
                className={`max-w-[1200px] w-[80%] md:w-full mx-auto flex flex-row justify-between items-center ${
                    containerPosition
                }`}
            >
                <Logo styles="z-11" source={logo} alt="Bookmark" type="image/svg+xml" />
                <Icon
                    onClick={() => {
                        handleBurgerClick();
                    }}
                    styles="md:hidden z-11"
                    path={menuIcon}
                    iconAlt={imageAlt}
                />

                <NavBar
                    styles={`${navBarStyles} md:grid md:grid-cols-4 gap-10 justify-items-center items-center text-(--bg-gray) md:text-(--text-black) uppercase font-medium tracking-widest bg-(--color-semi-transparent-bg) md:bg-transparent`}
                >
                    <hr className="w-[80%] md:hidden opacity-30" />
                    <Link
                        ref="#features"
                        styles="md:hover:text-(--secondary-color) py-3 px-6"
                        content="Features"
                    />
                    <hr className="w-[80%] md:hidden opacity-30" />
                    <Link
                        ref="#pricing"
                        styles="md:hover:text-(--secondary-color) py-3 px-6"
                        content="Pricing"
                    />
                    <hr className="w-[80%] md:hidden opacity-30" />
                    <Link
                        ref="#contact"
                        styles="md:hover:text-(--secondary-color) py-3 px-6"
                        content="Contact"
                    />
                    <hr className="w-[80%] md:hidden opacity-30" />
                    <Button
                        styles="uppercase shadow md:bg-(--secondary-color) md:text-white border-white md:border-transparent rounded-lg py-10 md:py-5 px-15 md:hover:bg-white md:hover:text-red-400 md:hover:border-red-400 md:hover:cursor-pointer border-2 text-center w-[80%] md:w-full my-5 md:my-0"
                        content="Login"
                    />
                </NavBar>
            </div>
        </header>
    );
}
