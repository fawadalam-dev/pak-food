import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

function HeroSection() {
  const [meals, setMeals] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <span className="font-bold text-white text-sm hidden sm:inline">Buner Recipes</span>
          </Link>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/"
              className="text-sm font-semibold text-white transition-colors duration-300 hover:text-orange-500"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm font-semibold text-white transition-colors duration-300 hover:text-orange-500"
            >
              Product
            </Link>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/login"
              className="text-sm font-semibold text-white transition-colors duration-300 hover:text-orange-500"
            >
              Log in <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative isolate px-6 pt-32 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-30 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          />
        </div>

        <div className="mx-auto max-w-7xl py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Welcome to Buner Recipes
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 sm:text-xl">
              Experience delicious Pakistani meals with easy ordering, secure checkout, and fast delivery.
            </p>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <Form onSearch={setMeals} onSearchStateChange={setHasSearched} meals={meals} />
          </div>

          {!hasSearched && (
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/products"
                className="rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-400"
              >
                Browse Products
              </Link>
              <Link
                to="/login"
                className="text-sm font-semibold text-white transition hover:text-orange-300"
              >
                Log in for faster checkout
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default HeroSection;
