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
                <span className="sr-only">Peshawar Recipes</span>
                <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <span className="font-bold text-white text-sm hidden sm:inline">Peshawar Recipes</span>
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
                      <span className="sr-only">Peshawar Recipes</span>
                      <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                        </svg>
                      </div>
                      <span className="font-bold text-white text-sm">Peshawar Recipes</span>
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
                Welcome to Peshawar Recipes website
                </h1>
                <p className="para-text mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
                  A warm Welcome to Peshawar Recipes! We are delighted to have you here, where we celebrate the rich culinary heritage of Peshawar and share our passion for delicious food
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

    </div>
  );
}
export default HeroSection;