import React from 'react';

interface IconFacebookProps {
    width?: string;
    height?: string;
    color?: string;
}

/**
 * IconFacebook component
 * @param props - props
 * @param props.width - The width of the icon.
 * @param props.height - The height of the icon.
 * @param props.color - The color of the icon.
 * @returns The rendered component.
 */
export const IconFacebook: React.FC<IconFacebookProps> = ({
    width = '1em',
    height = '1em',
    color = 'currentColor',
}) => (
    <svg width={width} height={height} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth="12"
            d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Zm0 0v-62m30-48h-10c-11.046 0-20 8.954-20 20v28m0 0H74m22 0h22"
        />
    </svg>
);
