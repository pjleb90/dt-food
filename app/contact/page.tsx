import Image from 'next/image';
import { FaGoogle } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <section className="bg-white dark:bg-black">
                {/* contact hero */}
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-white dark:bg-black rounded-lg p-8 md:px-12 md:py-6">
                        <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer" className="bg-blue-100 text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-red-700 dark:text-white mb-2">
                            <FaGoogle className="w-2.5 h-3 me-1.5" aria-hidden="true" />
                            Find a location near you
                        </a>
                        <h1 className="text-gray-900 dark:text-red-700 text-center md:text-left text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2">Visit one of our six locations</h1>
                        <p className="text-lg font-normal text-center md:text-left text-gray-500 dark:text-white mb-6">
                            Looking to satisfy your hunger or just have a question? Either way we would love to hear from you!
                        </p>
                    </div>
                    {/* location cards */}
                    <div className="flex justify-center items-center px-8">
                        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12 py-4">
                            {/* location 1 */}
                            <div className="max-w-sm bg-white border-b border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 py-6">
                                <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                <Image className="rounded-t-lg" src="/Lackner.png" alt="" width={500} height={500}/>
                                </a>
                                <div className="pt-5 pl-2 text-center md:text-left">
                                    <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Lackner Shopping Centre</h5>
                                    </a>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        1405 Ottawa Street N Unit 2
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                         Kitchener, ON, N2A 3Z1
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        Phone: <a href="tel:+15193428882">(519) 342-8882</a>
                                    </p>
                                </div>
                            </div>
                            {/* location 2 */}
                            <div className="max-w-sm bg-white border-b border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 py-6">
                                <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                <Image className="rounded-t-lg" src="/Pioneer.png" alt="" width={500} height={500}/>
                                </a>
                                <div className="pt-5 pl-2 text-center md:text-left">
                                    <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Pioneer Park Plaza</h5>
                                    </a>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        123 Pioneer Drive Unit E301
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                         Kitchener, ON, N2P 2A3
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        Phone: <a href="tel:+15198944360">(519) 894-4360</a>
                                    </p>
                                </div>
                            </div>
                            {/* location 3 */}
                            <div className="max-w-sm bg-white border-b border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 py-6">
                                <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                <Image className="rounded-t-lg" src="/Northfield.png" alt="" width={500} height={500}/>
                                </a>
                                <div className="pt-5 pl-2 text-center md:text-left">
                                    <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Northfield Plaza</h5>
                                    </a>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        36 Northfield Dr E
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                         Waterloo, ON N2L 6A1
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        Phone: <a href="tel:+15198868488">(519) 886-8488</a>
                                    </p>
                                </div>
                            </div>
                            {/* Location 4 */}
                            <div className="max-w-sm bg-white border-b border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 py-6">
                                <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                <Image className="rounded-t-lg" src="/Bridge.png" alt="" width={500} height={500}/>
                                </a>
                                <div className="pt-5 pl-2 text-center md:text-left">
                                    <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Bridge St W Plaza</h5>
                                    </a>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        373 Bridge St West
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                         Waterloo, ON, N2K 3K3
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        Phone: <a href="tel:+15482550139">(548) 255-0139</a>
                                    </p>
                                </div>
                            </div>
                            {/* Location 5 */}
                            <div className="max-w-sm bg-white border-b border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 py-6">
                                <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                <Image className="rounded-t-lg" src="/Bullfrog.png" alt="" width={500} height={500}/>
                                </a>
                                <div className="pt-5 pl-2 text-center md:text-left">
                                    <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Bullfrog Plaza *NEW</h5>
                                    </a>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        380 Eramosa Road
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                         Guelph, ON, N1E 2M9
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        Phone: <a href="tel:+15197661355">(519) 766-1355</a>
                                    </p>
                                </div>
                            </div>
                            {/* Location 6 */}
                            <div className="max-w-sm bg-white border-b border-gray-200 rounded-lg shadow dark:bg-black dark:border-gray-700 py-6">
                                <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                <Image className="rounded-t-lg" src="/Westgate.png" alt="" width={500} height={500}/>
                                </a>
                                <div className="pt-5 pl-2 text-center md:text-left">
                                    <a href="https://www.google.com/search?sca_esv=586734894&sxsrf=AM9HkKlBurteqihdQOnLOvi0-TQ6TTSyug:1701391209519&q=double+taste+shawarma&npsic=0&rflfq=1&rldoc=1&rllag=43479766,-80480648,4862&tbm=lcl&sa=X&ved=2ahUKEwjP-6qVgO2CAxXXODQIHfWjCt8QtgN6BAgPEAE&biw=1310&bih=630&dpr=1.47#rlfi=hd:;si:;mv:[[43.510161599999996,-80.4240528],[43.387638599999995,-80.5372438]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u5!2m2!5m1!1sgcid_3middle_1eastern_1restaurant!1m4!1u5!2m2!5m1!1sgcid_3pizza_1restaurant!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e5!2m1!1e3!3sIAEqAkNB,lf:1,lf_ui:9" target="_blank" rel="noopener noreferrer">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-red-700">Westgate Plaza</h5>
                                    </a>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        130 Cedar Street Unit 3
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                         Cambridge, ON, N1S 1W4
                                    </p>
                                    <p className="mb-2 font-normal text-gray-700 dark:text-white">
                                        Phone: <a href="tel:+15192678111">(519) 267-8111</a>
                                    </p>
                                </div>
                            </div>
                        </section>
                        </div>
                        <div className='flex flex-wrap items-start justify-center md:justify-between px-8 pt-4'>
                            {/* socials */}
                            <div className="bg-white dark:bg-black">
                            <div className="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-4 lg:px-6">
                                <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 dark:text-white">
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
                                {/* video */}
                                <div className="flex-grow py-6">
                                    <video className="w-full h-full rounded-lg shadow-xl" style={{ height: '400px', width: '600px' }} controls>
                                        <source src="/shawarma.mp4" type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                            </div>
                            {/* hours of operation */}
                            <div className='px-8 pt-4 text-center md:text-left'>
                                <h4 className="mb-2 text-2xl md:text-4xl font-bold text-gray-900 dark:text-red-700">Hours of operation</h4>
                                <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-white text-center md:text-left ">
                                    <li>
                                        Monday 10:00a.m. - 10:00p.m.
                                    </li>
                                    <li>
                                        Tuesday 10:00a.m. - 10:00p.m.
                                    </li>
                                    <li>
                                        Wednesday 10:00a.m. - 10:00p.m.
                                    </li>
                                    <li>
                                        Thursday 10:00a.m. - 10:00p.m.
                                    </li>
                                    <li>
                                        Friday 10:00a.m. - 10:00p.m.
                                    </li>
                                    <li>
                                        Saturday 10:00a.m. - 10:00p.m.
                                    </li>
                                    <li>
                                        Sunday 10:00a.m. - 10:00p.m.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </section>
        </div>
    );
}

export default Contact;