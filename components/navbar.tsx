'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path:string) => pathname === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-black">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src="/favicon.ico"
              className="h-8 rounded-xl"
              alt="Flowbite Logo"
              width={40}
              height={40}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Double Taste Shawarma
            </span>
          </a>
          <div className="hidden md:flex md:w-auto">
            <ul className="font-medium flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse">
              <li>
                <button
                  type="button"
                  onClick={() => router.push('/')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive('/')
                      ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                      : 'text-gray-900 hover:text-red-700 dark:text-white'
                  }`}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => router.push('/menu')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive('/menu')
                      ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                      : 'text-gray-900 hover:text-red-700 dark:text-white'
                  }`}
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => router.push('/gallery')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive('/gallery')
                      ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                      : 'text-gray-900 hover:text-red-700 dark:text-white'
                  }`}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => router.push('/about')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive('/about')
                      ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                      : 'text-gray-900 hover:text-red-700 dark:text-white'
                  }`}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => router.push('/contact')}
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
                    isActive('/contact')
                      ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                      : 'text-gray-900 hover:text-red-700 dark:text-white'
                  }`}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full md:hidden mt-4 border border-gray-100 rounded-lg bg-gray-50 bg-opacity-90 md:flex md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-black dark:border-gray-700`}
          id="navbar-default"
        >
          {/* Mobile menu links go here */}
          <button
            type="button"
            onClick={() => {
              router.push('/');
              toggleMobileMenu();
            }}
            className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
              isActive('/')
                ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                : 'text-gray-900 hover:text-red-700 dark:text-white'
            }`}
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => {
              router.push('/menu');
              toggleMobileMenu();
            }}
            className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
              isActive('/menu')
                ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                : 'text-gray-900 hover:text-red-700 dark:text-white'
            }`}
          >
            Menu
          </button>
          <button
            type="button"
            onClick={() => {
              router.push('/gallery');
              toggleMobileMenu();
            }}
            className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
              isActive('/gallery')
                ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                : 'text-gray-900 hover:text-red-700 dark:text-white'
            }`}
          >
            Gallery
          </button>
          <button
            type="button"
            onClick={() => {
              router.push('/about');
              toggleMobileMenu();
            }}
            className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
              isActive('/about')
                ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                : 'text-gray-900 hover:text-red-700 dark:text-white'
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => {
              router.push('/contact');
              toggleMobileMenu();
            }}
            className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${
              isActive('/contact')
                ? 'text-red-700 bg-white dark:bg-black dark:text-red-700'
                : 'text-gray-900 hover:text-red-700 dark:text-white'
            }`}
          >
            Contact
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
