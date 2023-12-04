const Social = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-8 lg:px-6">
                    <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold dark:text-red-700">6</dt>
                            <dd className="font-light text-gray-500 dark:text-white">locations</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold dark:text-red-700">1M+</dt>
                            <dd className="font-light text-gray-500 dark:text-white">satisfied customers</dd>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <dt className="mb-2 text-3xl md:text-4xl font-extrabold dark:text-red-700">7</dt>
                            <dd className="font-light text-gray-500 dark:text-white">days a week</dd>
                        </div>
                    </dl>
                </div>
            </section>
        </div>
    );
}

export default Social;