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
        <div>
            <Icon styles={} path={iconPath} iconAlt={iconAlt} />
            <h4>{title}</h4>
            <p>Minimum version {description}</p>
            <Button styles={} content="Add & Install Extension" />
        </div>
    );
}
