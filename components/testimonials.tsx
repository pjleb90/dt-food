import Image from 'next/image';

const Testimonials = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-10 lg:px-6">
                    <div className="mx-auto max-w-screen-sm">
                        <h2 className="mb-4 text-4xl md:text-5xl lg:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-red-700">Testimonials</h2>
                        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-white">Don&#39;t just take it from us, here from our customers why we&#39;re the right choice for you.</p>
                    </div>
                    <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                        {/* 1st review */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-gray-200 md:p-12 lg:border-r dark:bg-black dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-white">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-red-700">Great food and friendly staff</h3>
                                <p className="my-4">
                                    &ldquo;My friend recommended this place knowing my obsession with shawarma. I have not been to this place once but alot of times with friends. The restaurant is very clean and tidy. Everything is pin cleaned like you can literally see your face in the tiles..
                                </p>
                                <p className="my-4">
                                    Menu has a large variety from pizza ,wraps, poutine, salad etx. I have tried pizza and wrap from this place and it is amazing ngl. Wrap is really really good. The quality of pita bread which is serve is mind blowing.
                                </p>
                                <p className="my-4">
                                    Staff of this place is very welcoming and they try to help you with food to make choice. Happy Eating. 😀 &ldquo;
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <Image className="w-9 h-9 rounded-full" src="/review1.png" alt="profile picture" width={50} height={50} />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Ashna</div>
                                </div>
                            </figcaption>
                        </figure>
                        {/* 2nd review */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-gray-200 md:p-12 dark:bg-black dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-white">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-red-700">Amazing middle eastern food</h3>
                                <p className="my-4">
                                    &ldquo;Amazing middle eastern food. We have almost tried everything here and never got disappointed. It went above our expectations in terms of pricing, taste, quantity, quality and service.
                                </p>
                                <p className="my-4">
                                    Kind owners and employees, always had a good time here. Their shawarma poutine and pizza is my go to food. ❤️&ldquo;
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <Image className="w-9 h-9 rounded-full" src="/review2.png" alt="profile picture" width={50} height={50} />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Zehran</div>
                                </div>
                            </figcaption>
                        </figure>
                        {/* 3rd review */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-black dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-white">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-red-700">Awesomely generous and tastes fabulously good</h3>
                                <p className="my-4">
                                    &ldquo;Amazing food. I discovered this place through a friend and also from an Instagram ad when they started recently.
                                </p>
                                <p className="my-4">
                                    I used to go to Five star shawarma for my shawarma cravings. But DT has stepped up and they&#39;ve really impressed me with the food portions.
                                </p>
                                <p className="my-4">
                                    Awesomely generous and tastes fabulously good. Highly recommend. Keep up the quality, DT as more people come order here.👍&ldquo;
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <Image className="w-9 h-9 rounded-full" src="/review3.png" alt="profile picture" width={50} height={50} />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Anudeep</div>
                                </div>
                            </figcaption>
                        </figure>
                        {/* 4th review */}
                        <figure className="flex flex-col justify-center items-center p-8 text-center bg-white border-gray-200 md:p-12 dark:bg-black dark:border-gray-700">
                            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-white">
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-red-700">Friendly, fast & delicious meals</h3>
                                <p className="my-4">
                                    &ldquo;Came in tonight and we ordered 5 meals plus baklava and a side of fries. The 2 women working there were really friendly, fast, and made the meals look so damn delicious.
                                </p>
                                <p className="my-4">
                                    We had quite a few adjustments for the plates and they followed every instruction perfectly.  The food tastes great! It was hot, and perfectly cooked. Definitely recommend this place. 👌&ldquo;
                                </p>
                            </blockquote>
                            <figcaption className="flex justify-center items-center space-x-3">
                                <Image className="w-9 h-9 rounded-full" src="/review4.png" alt="profile picture" width={50} height={50} />
                                <div className="space-y-0.5 font-medium dark:text-white text-left">
                                    <div>Rhea</div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Testimonials;