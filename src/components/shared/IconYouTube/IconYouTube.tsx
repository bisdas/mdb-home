import React from 'react';

interface IconYouTubeProps {
    width?: string;
    height?: string;
    color?: string;
}

/**
 * IconYouTube component
 * @param props - props
 * @param props.width - The width of the icon.
 * @param props.height - The height of the icon.
 * @param props.color - The color of the icon.
 * @returns The rendered component.
 */
export const IconYouTube: React.FC<IconYouTubeProps> = ({ width = '1em', height = '1em', color = 'currentColor' }) => (
    <svg width={width} height={height} viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
        <path
            stroke={color}
            strokeWidth="12"
            d="M170 96c0-45-4.962-49.999-50-50H72c-45.038.001-50 5-50 50s4.962 49.999 50 50h48c45.038-.001 50-5 50-50Z"
        />
        <path stroke={color} strokeLinejoin="round" strokeWidth="12" d="M118 96 82 74v44l36-22Z" />
    </svg>
);
