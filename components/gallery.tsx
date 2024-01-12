'use client';

import { useState, useEffect, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx";

const Gallery = () => {
      const slides = [
        {

            url: 'test.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
        {

            url: 'placeholder.jpeg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);

    const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    };

    // Autoplay functionality
    useEffect(() => {
        const intervalId = setInterval(() => {
        nextSlide();
        }, 6000); // Change the interval time

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [currentIndex, nextSlide]);


    return (
        <div className="w-full pt-4 px-4 text-center bg-white dark:bg-black shadow border-red-700  sm:p-8 ">
            {/* carousel */}
                <div className='max-w-[1200px] h-[400px] md:h-[600px] w-full m-auto pb-12 relative group bg-white dark:bg-black rounded-md'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})`,
                            transition: 'background-image 1s ease-in',
                        }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2 dark:bg-black'>
                        {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-red-700' : 'text-gray-500 dark:bg-black'}`}
                        >
                            <RxDotFilled />
                        </div>
                        ))}
                    </div>
                </div>
            {/* call-to-action */}

        </div>
    );
}

export default Gallery;