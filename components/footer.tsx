import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white rounded-lg shadow dark:bg-black">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <Image src="/favicon.ico" className="h-8 rounded-xl" alt="Flowbite Logo" width={40} height={40} />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Double Taste Shawarma</span>
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-white">
                            <li>
                                <a href="/menu" className="hover:underline me-4 md:me-6">Menu</a>
                            </li>
                            <li>
                                <a href="/gallery" className="hover:underline me-4 md:me-6">Gallery</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:underline me-4 md:me-6">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">DT Shawarma™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;