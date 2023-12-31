import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:py-12 md:px-2">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-red-700">Waterloo Regions best shawarma</h1>
                    <p className="mb-8 text-lg md:text-2xl font-bold text-black dark:text-white lg:text-2xl sm:px-16 xl:px-48">A fast casual Middle Eastern/Mediterranean restaurant specializing in providing delicious shawarma at a price that doesn&#39;t break the bank!</p>
                    <div className="flex flex-col mb-2 lg:mb-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="/menu" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-3xl md:rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-gray-100 dark:text-white dark:border-white dark:hover:bg-red-700 dark:focus:ring-red-700">
                            View our menu
                        </a>
                        <a href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 dark:text-white rounded-3xl md:rounded-lg border border-gray-300 dark:border-white md:border-none bg-primary-700 hover:bg-primary-800 hover:text-red-700 focus:ring-2 focus:ring-primary-300 dark:focus:ring-red-700">
                            Our story
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;