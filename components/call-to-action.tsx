import Image from 'next/image';

const CTA = () => {
    return (
        <div className="w-full p-4 text-center bg-white rounded-lg shadow sm:p-8 dark:bg-black">
            <h5 className="mb-2 text-4xl font-bold text-gray-900 dark:text-red-700">Ready to order?</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-white">
                Available on all food delivery apps! Check UberEats, SkipTheDishes or DoorDash to order from your nearest location.
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <a href="https://www.ubereats.com/ca/store/double-taste-shawarma-waterloo/3cmtrF1bUBCfVTx6I8m2Ig?diningMode=DELIVERY&sc=SEARCH_SUGGESTION" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-3xl md:rounded-lg inline-flex items-center justify-center px-4 py-2.5 border dark:bg-black dark:hover:bg-black dark:border-white dark:hover:outline-double dark:hover:border-red-700 dark:focus:ring-gray-700">
                    <Image src="/UberEats.png" alt='SkipTheDishes logo' width={50} height={50} className="me-3 w-7 h-7" />
                    <div className="text-left rtl:text-right">
                        <div className="mb-1 text-xs">Order from</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">UberEats</div>
                    </div>
                </a>
                <a href="https://www.skipthedishes.com/double-taste-shawarma-northfield-dr" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-3xl md:rounded-lg inline-flex items-center justify-center px-4 py-2.5 border dark:bg-black dark:hover:bg-black dark:border-white dark:hover:outline-double dark:hover:border-red-700 dark:focus:ring-gray-700">
                    <Image src="/SkipTheDishes.png" alt='SkipTheDishes logo' width={50} height={50} className="me-3 w-7 h-7" />
                    <div className="text-left rtl:text-right">
                        <div className="mb-1 text-xs">Order from</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">SkipTheDishes</div>
                    </div>
                </a>
                <a href="https://www.doordash.com/store/double-taste-shawarma-waterloo-24361580/?event_type=autocomplete&pickup=false" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-3xl md:rounded-lg inline-flex items-center justify-center px-4 py-2.5 border dark:bg-black dark:hover:bg-black dark:border-white dark:hover:outline-double dark:hover:border-red-700 dark:focus:ring-gray-700">
                    <Image src="/DoorDash.png" alt='SkipTheDishes logo' width={50} height={50} className="me-3 w-7 h-7" />
                    <div className="text-left rtl:text-right">
                        <div className="mb-1 text-xs">Order from</div>
                        <div className="-mt-1 font-sans text-sm font-semibold">DoorDash</div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default CTA;