import React from 'react';

interface IconChevronDownProps {
    width?: string;
    height?: string;
    color?: string;
}

/**
 * IconChevronDown component.
 * @param props - props
 * @param props.width - The width of the icon.
 * @param props.height - The height of the icon.
 * @param props.color - The color of the icon.
 * @returns The rendered component.
 */
export const IconChevronDown: React.FC<IconChevronDownProps> = ({
    width = '1em',
    height = '1em',
    color = 'currentColor',
}) => (
    <svg
        fill={color}
        height={height}
        width={width}
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 511.787 511.787"
        xmlSpace="preserve"
        stroke={color}
        strokeWidth="11.259314"
    >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
        <g id="SVGRepo_iconCarrier">
            <g>
                <g>
                    <path d="M508.667,125.707c-4.16-4.16-10.88-4.16-15.04,0L255.76,363.573L18,125.707c-4.267-4.053-10.987-3.947-15.04,0.213 c-3.947,4.16-3.947,10.667,0,14.827L248.293,386.08c4.16,4.16,10.88,4.16,15.04,0l245.333-245.333 C512.827,136.693,512.827,129.867,508.667,125.707z" />
                </g>
            </g>
        </g>
    </svg>
);
