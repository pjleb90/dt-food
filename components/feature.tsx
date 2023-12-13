import Image from 'next/image'

const Feature = () => {
    return (
        <div>
            <section>
                <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-10 md:px-28 lg:flex-row lg:items-center">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                                    <h1 className="text-center md:text-left  mb-4 text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-red-700">Bring your appetite</h1>
                                    <p className="mb-8 text-md text-center md:text-left font-normal text-gray-500 lg:text-xl dark:text-white">
                                        Here at Double Taste Sharawma we pride ourselves on being able to deliver amazing portions at great prices.
                                        <br></br>You might leave wanting more but it won&apos;t be because you&apos;re hungry.
                                    </p>
                            <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Lorum Epsum</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Lorum Epsum</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Lorum Epsum</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Lorum Epsum</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Lorum Epsum</span>
                                </div>

                                <div className="flex items-center text-gray-800 -px-3 dark:text-gray-200">
                                    <svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span className="mx-3">Lorum Epsum</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <Image className="object-cover w-full h-full max-w-2xl rounded-md" src="https://images.unsplash.com/photo-1555181126-cf46a03827c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="glasses photo" width={500} height={500} />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Feature;