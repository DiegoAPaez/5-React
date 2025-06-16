import { BROWSERS } from '../../../data/data.ts';
import Card from '../../molecules/Card/Card.tsx';

export default function Downloads() {
    return (
        <section className="max-w-[1280px] mx-auto my-30 py-30 text-gray-700">
            <div className="md:mb-0 mb-30">
                <h2 className="text-6xl font-bold text-center mb-10">Download the extension</h2>
                <p className="text-4xl leading-15 w-[70%] md:w-[40%] text-(--color-text-grey) text-center mx-auto">
                    We've got more browsers in the pipeline. Please do let us know if you've got a
                    favorite you'd like us to prioritize.
                </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-15">
                {Object.keys(BROWSERS).map((browser, index) => (
                    <Card
                        index={index}
                        key={BROWSERS[browser].name}
                        title={BROWSERS[browser].name}
                        description={BROWSERS[browser].version}
                        iconPath={BROWSERS[browser].image}
                        iconAlt={BROWSERS[browser].name}
                    />
                ))}
            </div>
        </section>
    );
}
