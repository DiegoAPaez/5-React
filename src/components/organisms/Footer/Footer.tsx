import facebookIcon from '../../../assets/images/icon-facebook.svg';
import twitterIcon from '../../../assets/images/icon-twitter.svg';
import bookmarkWhiteIcon from '../../../assets/images/logo-bookmark-white.svg';
import Logo from '../../atoms/Logo/Logo.tsx';
import Link from '../../atoms/Link/Link.tsx';
import NavBar from '../../molecules/NavBar/NavBar.tsx';
import Icon from '../../atoms/Icon/Icon.tsx';

export default function Footer() {
    return (
        <footer className="footer mx-auto bg-(--main-color-dark) text-(--bg-grey) w-full py-5">
            <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-20 md:gap-5 py-10 justify-self-start items-center">
                <NavBar styles="grid grid-cols-1 md:grid-cols-4 gap-15 md:gap-20 justify-items-center items-center">
                    <Logo source={bookmarkWhiteIcon} alt="Bookmark" type="image/svg+xml" />
                    <Link
                        ref="#features"
                        styles="uppercase font-medium tracking-widest hover:filter-(--animate-fill-red)"
                        content="Features"
                    />
                    <Link
                        ref="#pricing"
                        styles="uppercase font-medium tracking-widest hover:filter-(--animate-fill-red)"
                        content="Pricing"
                    />
                    <Link
                        ref="#contact"
                        styles="uppercase font-medium tracking-widest hover:filter-(--animate-fill-red)"
                        content="Contact"
                    />
                </NavBar>
                <div className="grid grid-cols-2 mx-auto md:mx-0 gap-20 justify-items-center md:justify-self-end items-center">
                    <Icon
                        styles="hover:filter-(--animate-fill-red) hover:cursor-pointer"
                        path={facebookIcon}
                        iconAlt="Facebook"
                    />
                    <Icon
                        styles="hover:filter-(--animate-fill-red) hover:cursor-pointer"
                        path={twitterIcon}
                        iconAlt="Twitter"
                    />
                </div>
            </div>
        </footer>
    );
}
