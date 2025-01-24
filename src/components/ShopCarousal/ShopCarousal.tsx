/* eslint-disable max-lines-per-function, jsdoc/require-jsdoc */
import React, { useState, useRef, useEffect, useCallback } from 'react';

interface ImageCarouselProps {
    images: string[];
}

// todo: move carousal as a generic comonent
// todo: improvise the code in this component
// todo: add jsdocs to functions

/**
 * Image carousel component.
 * @param props - component props.
 * @param props.images - images array.
 * @returns rendered component.
 */
const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);
    const endX = useRef(0);

    const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleTouchStart = (event: React.TouchEvent) => {
        startX.current = event.touches[0].clientX;
    };

    const handleTouchMove = (event: React.TouchEvent) => {
        endX.current = event.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (startX.current - endX.current > 50) {
            handleNext();
        } else if (endX.current - startX.current > 50) {
            handlePrev();
        }
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 2000);
        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div
            style={{ position: 'relative', width: '100%', overflow: 'hidden' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div key={index} style={{ width: '100%', flexShrink: 0 }}>
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                aspectRatio: '3.2 / 2',
                                objectFit: 'cover',
                            }}
                        />
                    </div>
                ))}
            </div>
            {/* 
                <button onClick={handlePrev} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
                    Prev
                </button>
                <button onClick={handleNext} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
                    Next
                </button> 
            */}
            <div style={{ textAlign: 'center', marginTop: '30px' }}>
                {/* eslint-disable-next-line id-length */}
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => handleDotClick(index)}
                        style={{
                            display: 'inline-block',
                            width: '12px',
                            height: '12px',
                            margin: '0 5px',
                            borderRadius: '50%',
                            background: index === currentIndex ? 'black' : '#c6c6c6',
                            cursor: 'pointer',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;
