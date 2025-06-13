import Button from '../../atoms/Button/Button.tsx';
import Icon from '../../atoms/Icon/Icon.tsx';

export default function Card({
    title,
    description,
    iconPath,
    iconAlt,
}: {
    title: string;
    description: string;
    iconPath: string;
    iconAlt: string;
}) {
    return (
        <div className="shadow-lg flex flex-col justify-center items-center p-10 rounded-3xl">
            <Icon styles="my-15" path={iconPath} iconAlt={iconAlt} />
            <h4 className="text-4xl font-bold my-5">{title}</h4>
            <p className="text-(--text-gray) text-3xl mb-5">Minimum version {description}</p>
            <Button
                styles="font-bold py-5 px-15 border-2 border-transparent rounded-lg bg-(--main-color) text-(--bg-gray) hover:bg-white hover:text-(--main-color) hover:border-(--main-color) cursor-pointer"
                content="Add & Install Extension"
            />
        </div>
    );
}
