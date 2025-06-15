import EmailForm from '../../molecules/EmailForm/EmailForm.tsx';
import Button from '../../atoms/Button/Button.tsx';

export default function Contact() {
    return (
        <section className="form mt-30 py-30 bg-(--main-color) text-(--bg-gray) w-full">
            <div className="flex flex-col justify-center items-center gap-15">
                <h4 className="uppercase tracking-[0.5rem]">35,000+ already joined</h4>
                <h2 className="text-6xl font-bold w-[70%] md:w-[25%] text-center">
                    Stay up-to-date with what we're doing
                </h2>
                <form className="grid grid-cols-1 md:grid-cols-3 gap-[3rem] md:gap-[2rem] max-w-[450px] w-[80%] md:w-full justify-center items-center">
                    <EmailForm />
                    <Button
                        styles="bg-(--secondary-color) text-white font-bold border-transparent rounded-lg py-4 px-15 hover:bg-white hover:text-red-400 hover:border-red-400 border-2 hover:cursor-pointer"
                        content="Contact Us"
                    />
                </form>
            </div>
        </section>
    );
}
