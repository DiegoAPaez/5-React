import Icon from '../../atoms/Icon/Icon.tsx';
import arrowIcon from '../../../assets/images/icon-arrow.svg';

export default function Faq({
    question,
    answer,
    onSelect,
    selected,
}: {
    selected: boolean;
    question: string;
    answer: string;
    onSelect: () => void;
}) {
    const visibleClass = selected ? 'block' : 'hidden';
    const arrowClass = selected ? 'rotate-180 filter-(--animate-fill-red)' : '';
    const activeQuestion = selected ? 'text-(--secondary-color)' : 'text-(--text-grey)';
    return (
        <div className="flex flex-row justify-start flex-wrap">
            <div
                className="w-[90%] mx-auto flex flex-row justify-between items-center"
                onClick={onSelect}
            >
                <h3 className={`text-4xl my-10 ${activeQuestion}`}>{question}</h3>
                <Icon
                    styles={`hover:cursor-pointer ${arrowClass}`}
                    path={arrowIcon}
                    iconAlt="arrow"
                />
            </div>
            <div className={visibleClass}>
                <p className="w-[90%] mx-auto text-3xl leading-15 text-(--text-grey) my-5">
                    {answer}
                </p>
            </div>
        </div>
    );
}
