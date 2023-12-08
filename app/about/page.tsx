import Image from 'next/image'

const About = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-white text-center md:text-left">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-red-700">Our story</h2>
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
                        <Image className="w-full rounded-lg" src="/freshIngredients.png" alt="fresh_ingredients" width={500} height={500} />
                        <Image className="mt-4 w-full lg:mt-10 rounded-lg" src="/freshIngredients.png" alt="fresh_ingredients" width={500} height={500} />
                    </div>
                </div>
            </section>
            <section className='flex justify-center items-center pt-8 px-4 lg:py-16 lg:px-6'>
                <div>
                    <Image src="/DT.jpeg" alt="DT logo" width={1000} height={1000} className=' rounded-lg' />
                </div>
            </section>
        </div>
    );
}

export default About;