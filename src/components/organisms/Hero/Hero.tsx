import Titleset from '../../molecules/Titleset/Titleset.tsx';
import Button from '../../atoms/Button/Button.tsx';

export default function Hero() {
    return (
        <section className="hero max-w-[1280px] mx-auto grid md:grid-cols-2 gap-25 md:gap-5 items-center my-15 py-15 text-gray-700">
            <div className="grid grid-rows-3 justify-items-center md:justify-items-start items-center gap-10 order-2 md:order-1">
                <Titleset
                    containerStyle="flex flex-col gap-6 md:gap-10 w-full md:w-[90%] text-center md:text-left"
                    headingLevel="h1"
                    heading="A Simple Bookmark Manager"
                    headingStyle="font-bold text-center md:text-left text-7xl md:text-8xl"
                    paragraph="A clean and simple interface to organize your favorite
                        websites. Open a new browser tab and see your sites load
                        instantly. Try it for free."
                    paragraphStyle="text-4xl leading-15 w-[70%] md:w-[80%] text-(--text-gray) text-center md:text-left"
                />
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
        </section>
    );
}
