import React from 'react';

interface IconInstagramProps {
    width?: string;
    height?: string;
    color?: string;
}

/**
 * IconInstagram component
 * @param props - props
 * @param props.width - The width of the icon.
 * @param props.height - The height of the icon.
 * @param props.color - The color of the icon.
 * @returns The rendered component.
 */
export const IconInstagram: React.FC<IconInstagramProps> = ({
    width = '1em',
    height = '1em',
    color = 'currentColor',
}) => (
    <svg width={width} height={height} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            stroke={color}
            strokeWidth="12"
            d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"
        />
        <circle cx="96" cy="96" r="30" stroke={color} strokeWidth="12" />
        <circle cx="135" cy="57" r="9" fill={color} />
    </svg>
);
