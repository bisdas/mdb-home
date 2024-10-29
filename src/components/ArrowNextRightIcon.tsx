import React from 'react';

interface ArrowNextRightIconProps {
    width?: string;
    height?: string;
    color?: string;
}

/**
 * ArrowNextRightIcon component
 * @param props - props
 * @param props.width - The width of the icon.
 * @param props.height - The height of the icon.
 * @param props.color - The color of the icon.
 * @returns The rendered component.
 */
const ArrowNextRightIcon: React.FC<ArrowNextRightIconProps> = ({
    width = '1em',
    height = '1em',
    color = 'currentColor',
}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        imageRendering="optimizeQuality"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 319 511.61"
        width={width}
        height={height}
        fill={color}
    >
        <path d="M48.92 505.72 5.88 462.68c-7.85-7.85-7.83-20.72 0-28.54l178.35-178.35L5.88 77.44c-7.85-7.85-7.8-20.73 0-28.54L48.92 5.87c7.83-7.82 20.71-7.82 28.54 0l192.25 192.26.37.36 43.04 43.03c7.82 7.84 7.86 20.69 0 28.54l-43.04 43.04-.37.36L77.46 505.72c-7.85 7.86-20.68 7.86-28.54 0z" />
    </svg>
);

export default ArrowNextRightIcon;
