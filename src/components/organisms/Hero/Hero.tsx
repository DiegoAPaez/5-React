import heroImage from '../../../assets/images/illustration-hero.svg';
import Button from '../../atoms/Button/Button.tsx';

export default function Hero() {
    return (
        <section className="max-w-[1280px] w-[90%] mx-auto grid md:grid-cols-2 gap-25 md:gap-5 items-center my-15 py-15 text-gray-700">
            <div className="grid grid-rows-3 justify-items-center md:justify-items-start content-center gap-10 order-2 md:order-1">
                <h1 className="font-bold text-center md:text-left text-7xl md:text-8xl">
                    A Simple Bookmark
                    <br />
                    Manager
                </h1>
                <p className="text-4xl leading-15 w-[70%] md:w-[80%] text-(--text-gray) text-center md:text-left">
                    A clean and simple interface to organize your favorite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="flex flex-row gap-10 self-start">
                    <Button
                        styles="font-bold py-5 px-10 border-2 border-transparent rounded-lg bg-(--main-color) text-(--bg-gray) hover:bg-white hover:text-(--main-color) hover:border-(--main-color)"
                        content="Get it on Chrome"
                    />
                    <Button
                        styles="font-bold shadow py-5 px-10 border-2 border-transparent rounded-lg bg-(--bg-gray) hover:border-(--main-color-dark) hover:text-(--main-color-dark)"
                        content="Get it on Firefox"
                    />
                </div>
            </div>
            <div className="relative inline-block before:absolute before:-inset-1 before:-z-1 before:block before:bg-(--main-color) before:top-[25%] md:before:top-[30%] before:left-[20%] md:before:left-[30%] before:h-[75%] md:before:h-[80%] before:w-[90%] md:before:w-[90%] before:rounded-bl-[20rem] order-1 md:order-2">
                <img src={heroImage} alt="illustration-hero" />
            </div>
        </section>
    );
}
