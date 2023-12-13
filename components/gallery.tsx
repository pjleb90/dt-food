'use client';

import { useState, useEffect, useCallback } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx";
import CTA from '@/components/call-to-action';

const Gallery = () => {
      const slides = [
        {

            url: 'combo.jpeg',
        },
        {

            url: 'poutine.jpeg',
        },
        {

            url: 'chickenWrap.jpeg',
        },
        {

            url: 'mixed.jpeg',
        },
        {

            url: 'baklava.jpeg',
        },
        {

            url: 'pizza.jpeg',
        },
        {

            url: 'fries.jpeg',
        },
        {

            url: 'falafel.jpeg',
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
        <div className="w-full p-4 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-black">
            {/* carousel */}
                <div className='max-w-[1200px] h-[400px] md:h-[600px] w-full m-auto pb-12 px-4 relative group bg-white dark:bg-black'>
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
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${currentIndex === slideIndex ? 'text-red-700' : 'text-gray-500'}`}
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