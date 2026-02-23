import "./Hero-section.css";
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
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    src="./recipe-logo.jpg"
                                    alt="Logo"
                                    className="h-8 w-auto"
                                />
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
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
                            <Link to="/" className="text-sm/6 font-semibold text-white">
                                Home
                            </Link>
                            <Link to="/about" className="text-sm/6 font-semibold text-white">
                                About
                            </Link>
                            <Link to="/products" className="text-sm/6 font-semibold text-white">
                                Product
                            </Link>
                            <Link to="/features" className="text-sm/6 font-semibold text-white">
                                Feature
                            </Link>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <Link to="/login" className="text-sm/6 font-semibold text-white">
                                Log in <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </nav>

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
                    <div className="" style={{ padding: hasSearched ? "20px 0px" : "91px 0px" }}>
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
                        <Form onSearch={setMeals} onSearchStateChange={setHasSearched} meals={meals} />
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