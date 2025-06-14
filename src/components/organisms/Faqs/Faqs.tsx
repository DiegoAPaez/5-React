import { FAQS } from '../../../data/data.ts';
import Faq from '../../molecules/Faq/Faq.tsx';
import { useState } from 'react';
import Button from '../../atoms/Button/Button.tsx';

export default function Faqs() {
    const [selectedFaq, setSelectedFaq] = useState<string>();
    function handleSelectFaq(tab: string) {
        if (selectedFaq === tab) {
            setSelectedFaq('');
            return;
        }
        setSelectedFaq(tab);
    }

    return (
        <section className="max-w-[1280px] mx-auto text-gray-700">
            <div className="flex flex-col items-center">
                <h2 className="text-6xl w-[70%] md:w-full font-bold text-center mb-10">
                    Frequently Asked Questions
                </h2>
                <p className="text-4xl leading-15 w-[70%] md:w-[40%] text-(--text-grey) text-center mx-auto mb-20">
                    Here are some of our FAQS. If you have any other questions you'd like answered
                    please feel free to email us.
                </p>
            </div>
            <div className="w-[80%] md:w-[45%] mx-auto">
                {FAQS.map(faq => (
                    <div key={faq.question}>
                        <hr className="opacity-20" />
                        <Faq
                            onSelect={() => {
                                handleSelectFaq(faq.question);
                            }}
                            selected={selectedFaq === faq.question}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    </div>
                ))}
            </div>
            <div className="text-center mt-20 mb-30">
                <Button
                    styles="shadow bg-(--main-color) text-white rounded-lg py-6 px-10 font-bold hover:cursor-pointer"
                    content="More info"
                />
            </div>
        </section>
    );
}
