import Image from 'next/image'
import { PiHandWaving } from "react-icons/pi";
import { IoPricetagsOutline, IoOptions } from "react-icons/io5";
import { GiChickenOven } from "react-icons/gi";

const About = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-10 lg:px-2">
                    <div className="font-bold text-gray-500 sm:text-lg dark:text-white text-center md:text-left">
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
                        <Image className="w-full h-56 md:h-96 rounded-lg" src="/shawarma.jpeg" alt="office content 1" width={500} height={500}/>
                        <Image className="mt-4 w-full h-56 md:h-96 lg:mt-10 rounded-lg" src="/combos.png" alt="office content 2" width={500} height={500}/>
                    </div>
                </div>
            </section>
            {/* DT features */}
            <section className="bg-white dark:bg-black">
                <div className="container px-6 lg:px-32 py-10 pb-12 mx-auto">
                    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 capitalize dark:text-red-700 text-center md:text-left">What makes Double Taste Shawarma <br></br> standout from the rest</h1>
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
                            <div className="space-y-3 text-center md:text-left">
                                <span className="inline-block p-3 text-gray-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <GiChickenOven className="w-7 h-7" strokeWidth={4} />
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Fresh Ingredients</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Indulge in the exceptional flavors of our shawarmas crafted with the freshest and finest ingredients. We source locally to ensure every bite is a burst of deliciousness.
                                </p>
                            </div>
                            {/* second feature */}
                            <div className="space-y-3 text-center md:text-left">
                                <span className="inline-block p-3 text-gray-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <PiHandWaving className="w-7 h-7" strokeWidth={4} />
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Friendly Service</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Beyond the delicious shawarmas, experience warmth in every interaction. Our friendly and dedicated team is committed to making your visit a delightful and memorable one.
                                </p>
                            </div>
                            {/* third feature */}
                            <div className="space-y-3 text-center md:text-left">
                                <span className="inline-block p-3 text-gray-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <IoPricetagsOutline className="w-7 h-7" strokeWidth={4} />
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Affordable Prices</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    Enjoy mouthwatering shawarmas without breaking the bank. Our commitment to affordability ensures that you can savor every bite without compromising your budget.
                                </p>
                            </div>
                            {/* fourth feature */}
                            <div className="space-y-3 text-center md:text-left">
                                <span className="inline-block p-3 text-gray-500 bg-blue-100 rounded-xl dark:text-white dark:bg-red-700">
                                    <IoOptions className="w-7 h-7" strokeWidth={4} />
                                </span>
                                <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 capitalize dark:text-red-700">Customizable Options</h1>
                                <p className="text-gray-500 dark:text-gray-300 md:text-xl">
                                    From chicken to souvlaki to falafel, tailor your shawarma just the way you like it! With a range of customizable options, you have the freedom to create a shawarma masterpiece that suits your cravings.
                                </p>
                            </div>
                        </div>
                        {/* logo */}
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