import CTA from '@/components/call-to-action';
import Image from 'next/image'

const Menu = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="max-w-screen-md">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-center md:text-left text-black md:text-5xl lg:text-5xl dark:text-red-700">
                            Large portions at affordable prices.
                        </h1>
                        <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-white text-center md:text-left">
                            At Double Taste Shawarma our portions will have you leaving full and our great flavour and prices will keep you coming back for more.
                        </p>

                    </div>
                </div>
            </section>
            {/* Plates Banner */}
            <section className="bg-center bg-no-repeat bg-[url('/test.jpeg')] bg-cover bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white dark:text-white md:text-5xl lg:text-6xl">Plates</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            {/* Plates cards */}
            <div className="flex justify-center items-center px-4">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Chicken Shawarma Plate</h5>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.39</h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Shawarma, white rice, garden salad (romaine lettuce, tomatoes, onions, cucumbers)
                        with your choice of sauces. Substitute salad for extra rice at no cost.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel Plate</h5>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50</h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Falafel, white rice, garden salad (romaine lettuce, tomatoes, onions, cucumbers)
                        with your choice of sauces.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Souvlaki Plate</h5>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.99</h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Marinated chicken breast, white rice, garden salad (romaine lettuce, tomatoes, onions, cucumbers)
                        with your choice of sauces.
                    </p>
                </div>
                <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma & Rice (no salad)</h5>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.39</h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Chicken shawarma and extra white rice with your choice of sauces.
                    </p>
                </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Extra Meat</h5>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$4.95</h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Add extra meat to your plate.
                    </p>
                </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Substitute Rice with Fries</h5>
                    <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$1.80</h6>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Want fries instead of rice? We got you covered.
                    </p>
                </div>
            </section>
            </div>
            {/* Combos Banner */}
            <section className="bg-center bg-no-repeat bg-[url('/test.jpeg')] bg-cover bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white dark:text-white md:text-5xl lg:text-6xl">Combos</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            {/* Combos cards */}
            <div className="flex justify-center items-center px-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 1</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma or falafel wrap, small fries, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 2</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma or falafel wrap, small shawarma poutine, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 3</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$15.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Souvlaki wrap, small fries, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 4</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$16.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Souvlaki wrap, small shawarma poutine, and your choice of pop.
                        </p>
                    </div>
                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 5</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Veggie wrap, small fries, and your choice of pop.
                        </p>
                    </div>
                </section>
            </div>

            {/* Wraps Banner*/}
            <section className="bg-center bg-no-repeat bg-[url('/test.jpeg')] bg-cover bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white dark:text-white md:text-5xl lg:text-6xl">Wraps</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            {/* Wraps cards */}
            <div className="flex justify-center items-center px-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Chicken Shawarma Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread, shawarma, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.85</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread, falafel, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Souvlaki Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread, marinated chicken breast, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Veggie Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread with your choice of toppings and sauces.
                        </p>
                    </div>
                </section>
            </div>

            {/* Salads Banner*/}
            <section className="bg-center bg-no-repeat bg-[url('/test.jpeg')] bg-cover bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white dark:text-white md:text-5xl lg:text-6xl">Salads</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            {/* Salads cards */}
            <div className="flex justify-center items-center px-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Chicken Shawarma Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.80</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma, romaine lettuce, and choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.85</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Falafel, romaine lettuce, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Greek Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.50 </h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Romaine lettuce, cucumbers, black olives, feta cheese, and homemade Greek dressing.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Caesar Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Romaine lettuce, croutons, bacon bits, and garlic sauce.
                        </p>
                    </div>
                </section>
            </div>
            {/* Appetizers & Sides Banner*/}
            <section className="bg-center bg-no-repeat bg-[url('/test.jpeg')] bg-cover bg-gray-600 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-24">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white dark:text-white md:text-5xl lg:text-6xl">Appetizers & Sides</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </section>
            {/* Appetizers & Sides cards */}
            <div className="flex justify-center items-center px-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Fries</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$3.99 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$4.99 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$5.99 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.99 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Poutine</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$5.50 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.50 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$7.50 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.50 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma Poutine</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$7.50 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.50 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.50 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Side Rice</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$3.99 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$4.99 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$5.99 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.99 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma Nachos</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.90</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma, salsa, tomatoes, onions. cheese and all three sauces (spicy mayo, sriracha, garlic sauce).
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma Flatbread</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$14.78 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$18.66 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma, salsa, tomatoes, onions. cheese and all three sauces (spicy mayo, sriracha, garlic sauce).
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Extra/Side Sauce</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$1.00 each</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            For poutine, fries, falafel and rice.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Extra Cheese</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$1.50</h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Baklava</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$2.49</h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$0.99</h6>
                    </div>
                </section>
            </div>
            <CTA />
        </div>
    );
}

export default Menu;