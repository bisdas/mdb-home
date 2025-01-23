import React from 'react';

interface IconArrowUpProps {
    width?: string;
    height?: string;
    color?: string;
}

/**
 * IconArrowUp component.
 * @param props - props
 * @param props.width - The width of the icon.
 * @param props.height - The height of the icon.
 * @param props.color - The color of the icon.
 * @returns The rendered component.
 */
export const IconArrowUp: React.FC<IconArrowUpProps> = ({ width = '1em', height = '1em', color = 'currentColor' }) => (
    <svg width={width} height={height} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
            fill={color}
            d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0 33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176 28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
        />
    </svg>
);
