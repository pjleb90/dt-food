'use client';

import { useState } from 'react';
import { BiSolidFoodMenu } from "react-icons/bi";
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from "react-icons/rx";
import CTA from '@/components/call-to-action';

const Gallery = () => {
      const slides = [
        {
            title: 'Combo',
            url: '/combo.jpeg',
        },
        {
            title: 'Poutine',
            url: 'poutine.jpeg',
        },
        {
            title: 'Chicken Wrap',
            url: 'chickenWrap.jpeg',
        },
        {
            title: 'Mixed',
            url: 'mixed.jpeg',
        },
        {
            title: 'Baklava',
            url: 'baklava.jpeg',
        },
        {
            title: 'Pizza',
            url: 'pizza.jpeg',
        },
        {
            title: 'Fries',
            url: 'fries.jpeg',
        },
        {
            title: 'Falafel',
            url: 'falafel.jpeg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: any) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div>
            {/* gallery hero */}
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:pt-8 pb-4">
                    <div className="rounded-lg p-8 md:p-12 mb-8">
                        <h1 className="text-gray-900 dark:text-red-700 text-3xl text-center md:text-left md:text-5xl font-extrabold mb-2">Some of our featured dishes</h1>
                        <p className="text-lg font-normal text-center md:text-left text-gray-500 dark:text-white mb-6">
                            Like to see what you&#39;re ordering before you order? We got you covered.
                        </p>
                        <a href="/menu" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-3xl md:rounded-lg inline-flex items-center justify-center px-4 py-2.5 border dark:bg-black dark:hover:bg-black dark:border-white dark:hover:outline-double dark:hover:border-red-700 dark:focus:ring-gray-700">
                            Menu
                            <BiSolidFoodMenu
                                className="ms-2 rtl:rotate-180"
                                src="menu.svg"
                                alt="Menu Icon"
                                width={100}
                                height={100}
                                style={{ width: '20px', height: '20px' }}
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/* carousel */}
                <div className='max-w-[1200px] h-[400px] md:h-[680px] w-full m-auto pb-16 px-4 relative group bg-white dark:bg-black'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})`,
                            transition: 'background-image 1s ease-in-out',
                        }}
                        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                    ></div>
                    {/* image title */}
                    <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 dark:text-red-700 text-3xl md:text-5xl font-extrabold text-center mb-2">
                        {slides[currentIndex].title}
                    </h1>
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
            <CTA />
        </div>
    );
}

export default Gallery;