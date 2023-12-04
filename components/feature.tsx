const Feature = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-red-700">Bring your appetite</h1>
                        <p className="mb-8 text-md font-normal text-gray-500 lg:text-xl dark:text-white">
                            Here at Double Taste Sharawma we pride ourselves on being able to deliver amazing portions at great prices.
                            <br></br>You might leave wanting more but it won&#39;t be because you&#39;re hungry!
                        </p>
                        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                        <a href="/menu" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-700 dark:focus:ring-gray-800">
                            Menu
                        </a>
                        <a href="/gallery" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-red-700 dark:focus:ring-gray-800">
                            Gallery
                        </a>
                        </div>
                    </div>
                    <div>
                        <iframe className="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="/shawarma.mp4/" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;