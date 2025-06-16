export default function Tab({
    content,
    onSelect,
    isSelected,
}: {
    content: string;
    onSelect: () => void;
    isSelected: boolean;
}) {
    const selectedTab =
        'tracking-wider text-3xl text-center py-10 px-10 w-full border-2 border-transparent border-b-(--secondary-color) cursor-pointer';
    const unselectedTab =
        'tracking-wider text-3xl text-center py-10 px-10 w-full border-2 border-transparent cursor-pointer';

    return (
        <button className={isSelected ? selectedTab : unselectedTab} onClick={onSelect}>
            {content}
        </button>
    );
}
