import Image from 'next/image';

const Hero = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="/menu" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-black dark:text-white hover:bg-gray-200 dark:hover:bg-red-700" role="alert">
                        <span className="text-sm bg-primary-600 rounded-full text-white px-4 py-1.5">Hungry?</span> <span className="text-sm font-medium">Order now!</span>
                        <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-red-700">Waterloo Region&#39;s best shawarma</h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-white">A fast casual Middle Eastern/Mediterranean restaurant specializing in providing delicious shawarma at a price that doesn&#39;t break the bank!</p>
                    <div className="flex flex-col mb-2 lg:mb-2 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                                <a href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-700 dark:focus:ring-gray-800">
                            Contact us
                        </a>
                        <a href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Our story
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </a>
                    </div>
                </div>
                <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold text-red-700 uppercase">AVAILABLE ON</span>
            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                <a href="https://www.doordash.com/store/double-taste-shawarma-waterloo-24361580/?event_type=autocomplete&pickup=false" target="_blank" rel="noopener noreferrer" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <Image src="/doorRound.png" alt='' width={50}    height={50}/>
                </a>
                <a href="https://www.skipthedishes.com/double-taste-shawarma-northfield-dr" target="_blank" rel="noopener noreferrer" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <Image src="/SkipTheDishes.png" alt='' width={50}    height={50}/>
                </a>
                <a href="https://www.ubereats.com/ca/store/double-taste-shawarma-waterloo/3cmtrF1bUBCfVTx6I8m2Ig?diningMode=DELIVERY&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer" className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                    <Image src="/uberRound.png" alt='' width={50}    height={50}/>
                </a>
            </div>
        </div>
            </section>
        </div>
    );
}

export default Hero;