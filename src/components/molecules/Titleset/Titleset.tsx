import * as React from 'react';

interface TitlesetProps {
    containerStyle: string;
    headingLevel: 'h1' | 'h2' | 'h3';
    heading: string;
    headingStyle: string;
    paragraph: string;
    paragraphStyle: string;
}

export default function Titleset({
    containerStyle,
    headingLevel,
    heading,
    headingStyle,
    paragraph,
    paragraphStyle,
}: TitlesetProps) {
    return (
        <div className={containerStyle}>
            {React.createElement(headingLevel, { className: headingStyle }, heading)}
            <p className={paragraphStyle}>{paragraph}</p>
        </div>
    );
}
