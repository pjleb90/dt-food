
'use client';
import { useEffect } from 'react';
import CTA from '@/components/call-to-action';
import Image from 'next/image'

const Menu = () => {
    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div>
            {/* menu hero */}
            <section className="bg-white bg-cover border-red-700 border-y-8">
                <div className="py-8 px-4 mx-auto max-w-screen-xl md:py-8 md:px-6">
                    <div className="max-w-screen-md">
                        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-center md:text-left text-black">
                            Large portions at affordable prices.
                        </h1>
                        <p className="mb-8 font-bold text-red-700 sm:text-xl md:text-2xl text-center md:text-left">
                            At Double Taste Shawarma our portions will have you leaving full and our great flavour and prices will keep you coming back for more.
                        </p>

                    </div>
                </div>
            </section>

            {/* menu navigation */}
            <nav className="text-center text-xl pb-2 pt-12  flex bg-black font-bold">
                <a href="#plates" className="text-white  hover:text-red-700 mx-2 flex-grow underline">Plates</a>
                <a href="#combos" className="text-white  hover:text-red-700 mx-2 flex-grow underline">Combos</a>
                <a href="#wraps" className="text-white  hover:text-red-700 mx-2 flex-grow underline">Wraps</a>
                <a href="#salads" className="text-white  hover:text-red-700 mx-2 flex-grow underline">Salads</a>
                <a href="#apps" className="text-white  hover:text-red-700 mx-2 flex-grow  hidden md:inline underline">Appetizers & Sides</a>
                <a href="#apps" className="text-white  hover:text-red-700 mx-2 flex-grow md:hidden underline">Apps</a>
            </nav>

            {/* Plates Banner */}
            <section id="plates" className="bg-center bg-no-repeat bg-red-700 bg-blend-multiply border-y-2 border-white">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-4">
                    <h1 className="mb-4 text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">Plates</h1>
                </div>
            </section>
            {/* Plates cards */}
            <div className="flex justify-center items-center p-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Chicken Shawarma Plate</h5>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.39</h6>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Shawarma, white rice, garden salad (romaine lettuce, tomatoes, onions, cucumbers)
                                with your choice of sauces. Substitute salad for extra rice at no cost.
                            </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel Plate</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Falafel, white rice, garden salad (romaine lettuce, tomatoes, onions, cucumbers)
                            with your choice of sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Souvlaki Plate</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Marinated chicken breast, white rice, garden salad (romaine lettuce, tomatoes, onions, cucumbers)
                            with your choice of sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma & Rice (no salad)</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.39</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Chicken shawarma and extra white rice with your choice of sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Extra Meat</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$4.95</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Add extra meat to your plate.
                        </p>
                    </div>
                        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                            <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Substitute Rice with Fries</h5>
                            <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$1.80</h6>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Want fries instead of rice? We got you covered.
                            </p>
                        </div>
                </section>
            </div>

            {/* Combos Banner */}
            <section id="combos" className="bg-center bg-no-repeat bg-cover bg-red-700 bg-blend-multiply border-y-2 border-white">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-4">
                    <h1 className="mb-4 text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">Combos</h1>
                </div>
            </section>
            {/* Combos cards */}
            <div className="flex justify-center items-center p-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 1</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$12.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma or falafel wrap, small fries, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 2</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma or falafel wrap, small shawarma poutine, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 3</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$15.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Souvlaki wrap, small fries, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 4</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$16.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Souvlaki wrap, small shawarma poutine, and your choice of pop.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Wrap Combo 5</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Veggie wrap, small fries, and your choice of pop.
                        </p>
                    </div>
                </section>
            </div>

            {/* Wraps Banner*/}
            <section id="wraps" className="bg-center bg-no-repeat bg-cover bg-red-700 bg-blend-multiply border-y-2 border-white">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-4">
                    <h1 className="mb-4 text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none text-white">Wraps</h1>
                </div>
            </section>
            {/* Wraps cards */}
            <div className="flex justify-center items-center p-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Chicken Shawarma Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread, shawarma, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.85</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread, falafel, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Souvlaki Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread, marinated chicken breast, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Veggie Wrap</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.50</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            White or whole wheat pita bread with your choice of toppings and sauces.
                        </p>
                    </div>
                </section>
            </div>

            {/* Salads Banner*/}
            <section id="salads" className="bg-center bg-no-repeat bg-cover bg-red-700 bg-blend-multiply border-y-2 border-white">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-4">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Salads</h1>
                </div>
            </section>
            {/* Salads cards */}
            <div className="flex justify-center items-center p-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Chicken Shawarma Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.80</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma, romaine lettuce, and choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Falafel Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.85</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Falafel, romaine lettuce, and your choice of toppings and sauces.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Greek Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.50 </h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Romaine lettuce, cucumbers, black olives, feta cheese, and homemade Greek dressing.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Caesar Salad</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.99</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Romaine lettuce, croutons, bacon bits, and garlic sauce.
                        </p>
                    </div>
                </section>
            </div>
            {/* Appetizers & Sides Banner*/}
            <section id="apps" className="bg-center bg-no-repeat bg-cover bg-red-700 bg-blend-multiply border-y-2 border-white">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-4">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-5xl">Appetizers & Sides</h1>
                </div>
            </section>
            {/* Appetizers & Sides cards */}
            <div className="flex justify-center items-center p-4">
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-6">
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Fries</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$3.99 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$4.99 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$5.99 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.99 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Poutine</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$5.50 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.50 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$7.50 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.50 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma Poutine</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$7.50 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.50 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$9.50 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$11.50 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Side Rice</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$3.99 <span className='font-normal text-gray-700 dark:text-gray-400'>small</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$4.99 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$5.99 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$6.99 <span className='font-normal text-gray-700 dark:text-gray-400'>extra large</span></h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma Nachos</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$8.90</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma, salsa, tomatoes, onions. cheese and all three sauces (spicy mayo, sriracha, garlic sauce).
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Shawarma Flatbread</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$14.78 <span className='font-normal text-gray-700 dark:text-gray-400'>medium</span></h6>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$18.66 <span className='font-normal text-gray-700 dark:text-gray-400'>large</span></h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            Shawarma, salsa, tomatoes, onions. cheese and all three sauces (spicy mayo, sriracha, garlic sauce).
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Extra/Side Sauce</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$1.00 each</h6>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                            For poutine, fries, falafel and rice.
                        </p>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Extra Cheese</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$1.50</h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Baklava</h5>
                        <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">$2.49</h6>
                    </div>
                    <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700">
                        <figure><Image src="/placeholder.jpeg" alt="Shoes" width={500} height={500}/></figure>
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