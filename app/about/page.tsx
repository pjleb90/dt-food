import Image from 'next/image'

const About = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-4">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-white text-center md:text-left">
                        <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-red-700">Our story</h2>
                        <p className="mb-4">
                            Double Taste Shawarma are local, middle eastern restaurants family owned and run by Abubakir Rahimi and Pari Khezri. The husband and wife duo have worked in the restaurant industry for more than 25 years.
                        </p>
                        <p className="mb-4">
                            After owning a franchised pizza restaurant, Abubakir Rahimi and Pari Khezri decided to take a risk and open their own private restaurant. Being of Iranian descent, they settled on Middle Eastern/Mediterranean recipes, with Iranian and Western influence.
                        </p>
                        <p className='mb-4'>
                            As such, the Double Taste Shawarma concept was conceived and the first location was established in 2013.
                        </p>
                        <p>
                            As of today there are six locations within the Kitchener Waterloo area serving up delicious food and flavourful recipes.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <Image className="w-full rounded-lg" src="/placeholder.jpeg" alt="fresh_ingredients" width={500} height={500} />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/placeholder.jpeg" alt="fresh_ingredients" width={500} height={500} />
                    </div>
                </div>
            </section>

            {/* DT features */}
            <section className="bg-white dark:bg-black">
                <div className="container px-6 lg:px-36 py-10 mx-auto">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 capitalize dark:text-red-700">What makes Double Taste Shawarma <br></br> standout from the rest</h1>
                    {/* header underline */}
                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-red-700 dark:bg-white rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-red-700 dark:bg-white rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-red-700 dark:bg-white rounded-full"></span>
                    </div>
                    {/* features */}
                    <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
                        <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
                            {/* first feature */}
                            <div className="space-y-3">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Lorum Epsum</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                            {/* second feature */}
                            <div className="space-y-3">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Lorum Epsum</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                            {/* third feature */}
                            <div className="space-y-3">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Lorum Epsum</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>

                            {/* fourth feature */}
                            <div className="space-y-3">
                                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Lorum Epsum</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                                </p>
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                            <Image className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                            src="/logo.jpeg" alt="" width={500} height={500} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;