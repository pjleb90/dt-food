const Feature = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h1 className="text-center md:text-left  mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-red-700">Bring your appetite</h1>
                        <p className="mb-8 text-md text-center md:text-left font-normal text-gray-500 lg:text-xl dark:text-white">
                            Here at Double Taste Sharawma we pride ourselves on being able to deliver amazing portions at great prices.
                            <br></br>You might leave wanting more but it won&apos;t be because you&apos;re hungry.
                        </p>
                    </div>
                    <div className="flex-grow">
                        <video className="w-full h-full rounded-lg shadow-xl" style={{ height: '400px', width: '400px' }} controls>
                            <source src="/shawarma.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;