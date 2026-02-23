import Form from "./Form";
import { useState } from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  const [meals, setMeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  
  return (
    <div>

      <div className="bg-gray-900">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            aria-label="Global"
            className="flex items-center justify-between p-6 lg:px-8"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <span className="sr-only">Buner Recipes</span>
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <span className="font-bold text-white text-sm hidden sm:inline">Buner Recipes</span>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                command="show-modal"
                commandfor="mobile-menu"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <Link to="/" className="text-sm/6 font-semibold text-white transition-colors duration-300 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500">
                Home
              </Link>
              <Link to="/about" className="text-sm/6 font-semibold text-white transition-colors duration-300 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500">
                About
              </Link>
              <Link to="/products" className="text-sm/6 font-semibold text-white transition-colors duration-300 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500">
                Product
              </Link>
              <Link to="/features" className="text-sm/6 font-semibold text-white transition-colors duration-300 hover:text-orange-500 border-b-2 border-transparent hover:border-orange-500">
                Feature
              </Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link to="/login" className="text-sm/6 font-semibold text-white transition-colors duration-300 hover:text-orange-500">
                Log in <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </nav>
          <el-dialog>
            <dialog
              id="mobile-menu"
              className="backdrop:bg-transparent lg:hidden"
            >
              <div tabIndex={0} className="fixed inset-0 focus:outline-none">
                <el-dialog-panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                      <span className="sr-only">Buner Recipes</span>
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                        </svg>
                      </div>
                      <span className="font-bold text-white text-sm">Buner Recipes</span>
                    </a>
                    <button
                      type="button"
                      command="close"
                      commandfor="mobile-menu"
                      className="-m-2.5 rounded-md p-2.5 text-gray-200"
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        data-slot="icon"
                        aria-hidden="true"
                        className="size-6"
                      >
                        <path
                          d="M6 18 18 6M6 6l12 12"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-white/10">
                      <div className="space-y-2 py-6">
                        <Link
                          to="/"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white transition-colors duration-300 hover:text-orange-500 hover:bg-white/5"
                        >
                          Home
                        </Link>
                        <Link
                          to="/about"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white transition-colors duration-300 hover:text-orange-500 hover:bg-white/5"
                        >
                          About
                        </Link>
                        <Link
                          to="/products"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white transition-colors duration-300 hover:text-orange-500 hover:bg-white/5"
                        >
                          Product
                        </Link>
                        <Link
                          to="/features"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white transition-colors duration-300 hover:text-orange-500 hover:bg-white/5"
                        >
                          Feature
                        </Link>
                      </div>
                      <div className="py-6">
                        <Link
                          to="/login"
                          className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white transition-colors duration-300 hover:text-orange-500 hover:bg-white/5"
                        >
                          Log in
                        </Link>
                      </div>
                    </div>
                  </div>
                </el-dialog-panel>
              </div>
            </dialog>
          </el-dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            ></div>
          </div>
          <div className="" style={{padding: hasSearched ? "20px 0px" : "91px 0px"}}>
            {!hasSearched && (
              <div className="text-center">
                <h1 className="heading-text text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                Welcome to Buner Recipes website
                </h1>
                <p className="para-text mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                  A warm Welcome to Buner Recipes! We are delighted to have you here, where we celebrate the rich culinary heritage of Peshawar and share our passion for delicious food
                </p>
              </div>
            )}
            <Form onSearch={setMeals} onSearchStateChange={setHasSearched} meals={meals}/>
            {!hasSearched && (
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            )}
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            ></div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-950 border-t border-gray-800 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <span className="font-bold text-white text-lg">Food Recipes</span>
              </div>
              <p className="text-gray-400 text-sm">Discover authentic Pakistani recipes with love and tradition.</p>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">About Us</Link></li>
                <li><Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Products</Link></li>
                <li><Link to="/features" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Features</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Breakfast</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Lunch</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Dinner</a></li>
                <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Desserts</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">Connect With Us</h3>
              <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a.9.9 0 0 0-.9-.9h-4.2a4.1 4.1 0 0 0-4.1 4.1v3.2H7.9a.9.9 0 0 0-.9.9v3.2a.9.9 0 0 0 .9.9h2.9v8.1a.9.9 0 0 0 .9.9h3.3a.9.9 0 0 0 .9-.9v-8.1h2.9a.9.9 0 0 0 .9-.7l.5-3.2a.9.9 0 0 0-.9-1.1h-3.4V7.2a1.1 1.1 0 0 1 1.1-1.1H19a.9.9 0 0 0 .9-.9V3z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 5.5 9 5.5z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16.5 6.5h.01M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0Z" fill="white"></path>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.216 3.556a.75.75 0 0 0-1.06 1.06l-18.5 18.5a.75.75 0 1 0 1.06 1.06l18.5-18.5a.75.75 0 0 0 0-1.06zM3.75 2a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM20.75 18.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">About</h4>
                <p className="text-gray-400 text-xs leading-relaxed">We bring you the authentic taste of Pakistani cuisine with traditional recipes passed down through generations.</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-xs">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-xs">Terms & Conditions</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-xs">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-3 text-sm">Contact Info</h4>
                <p className="text-gray-400 text-xs mb-1">Email: info@fwdalam123.com</p>
                <p className="text-gray-400 text-xs mb-1">Phone: +92 (0) 314 1523463</p>
                <p className="text-gray-400 text-xs">Buner, Pakistan</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              2026 Food Recipes. All rights reserved.
            </p>
            <p className="text-orange-500 font-semibold text-sm text-center">
              Created with love by Fawad Alam
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
export default HeroSection;