import { FEATURES } from '../../data/data.ts';
import Tab from '../atoms/Tab/Tab.tsx';
import { useState } from 'react';
import Button from '../atoms/Button/Button.tsx';

export default function Features() {
    const [selected, setSelected] = useState<string>(FEATURES.Booking.title);

    function handleSelectTab(tabKey: string) {
        setSelected(tabKey);
    }

    return (
        <section className="max-w-[1280px] mx-auto my-30 py-30 text-gray-700">
            <div>
                <h2 className="text-6xl font-bold text-center mb-10">Features</h2>
                <p className="text-4xl leading-15 w-[70%] md:w-[40%] text-(--text-grey) text-center mx-auto mb-20">
                    Our aim is to make it quick and easy for you to access your favorite websites.
                    Your bookmarks sync between your devices so you can access on the go.
                </p>
            </div>
            <div className="grid justify-center justify-items-center">
                <menu className="flex flex-col md:grid md:grid-cols-3 w-[80%] gap-6 md:justify-items-center mb-30 md:mb-20">
                    <hr className="md:hidden opacity-25" />
                    {Object.keys(FEATURES).map(key => (
                        <div>
                            <Tab
                                key={FEATURES[key].title}
                                content={FEATURES[key].title}
                                onSelect={() => {
                                    handleSelectTab(FEATURES[key].title);
                                }}
                                isSelected={selected === FEATURES[key].title}
                            />
                            <hr className="md:hidden opacity-25" />
                        </div>
                    ))}
                </menu>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-15 justify-items-center items-center">
                    {Object.keys(FEATURES).map(key => (
                        <>
                            <div
                                key={FEATURES[key].title}
                                className={`w-[80%] md:w-full justify-items-center relative before:absolute before:-inset-1 before:-z-1 before:block before:bg-(--main-color) before:top-[25%] before:left-[-20%] before:h-[95%] before:w-[100%] before:rounded-r-[20rem] 
                            ${selected === FEATURES[key].title ? 'block' : 'hidden'}`}
                            >
                                <img src={FEATURES[key].image} alt={FEATURES[key].title} />
                            </div>
                            <div
                                className={`grid row-auto gap-10 justify-items-center md:justify-items-start mt-30 md:mt-0
                                ${selected === FEATURES[key].title ? 'grid' : 'hidden'}`}
                            >
                                <h3 className="text-6xl font-bold">{FEATURES[key].subtitle}</h3>
                                <p className="text-4xl leading-15 w-[75%] text-(--text-grey)">
                                    {FEATURES[key].description}
                                </p>
                                <Button
                                    styles="shadow bg-(--main-color) text-white rounded-lg py-6 px-10 font-bold hover:cursor-pointer"
                                    content="More info"
                                />
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </section>
    );
}
