import { useState } from "react";
import axios from "axios";

function Form({ onSearch, onSearchStateChange, meals: propsMeals }) {
  const [usermeal, setUserMeal] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getMeals(e) {
    e.preventDefault();
    if (!usermeal.trim()) {
      setError("Please enter a meal name");
      return;
    }
    
    setLoading(true);
    setError("");
    try {
      const mealsRef = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${usermeal}`,
      );
      if (!mealsRef.data.meals) {
        setError("No meals found. Try another search.");
        setMeals([]);
      } else {
        setMeals(mealsRef.data.meals);
        onSearch(mealsRef.data.meals);
        onSearchStateChange(true);
      }
    } catch (err) {
      setError("Some Error Occurred");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full py-10 px-4 md:px-12 bg-gradient-to-b from-gray-900 to-black min-h-screen">
      <form onSubmit={getMeals} className="mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-0 rounded-2xl bg-gray-800 border-3 border-orange-500 overflow-hidden shadow-2xl">
            <input
              id="usermeal"
              type="text"
              name="usermeal"
              placeholder="Search meals by name..."
              className="flex-1 bg-gray-800 py-4 px-6 text-white placeholder:text-gray-400 focus:outline-none text-lg"
              onChange={(e) => {
                setUserMeal(e.target.value);
                setError("");
              }}
              value={usermeal}
            />
            <button type="submit" disabled={loading} className="px-10 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-500 text-black font-bold text-lg transition duration-200">
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
          {error && (
            <p className="text-red-400 text-center mt-3 font-semibold">{error}</p>
          )}
        </div>
      </form>

      <div className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {meals.map((ml) => {
          return (
            <div
              key={ml.idMeal}
              className="w-36 bg-gray-800 rounded-lg overflow-hidden shadow-md border border-gray-700 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:border-orange-500 cursor-pointer"
            >
              <div className="relative h-32 overflow-hidden bg-gray-900">
                <img
                  className="w-full h-full object-cover"
                  src={ml.strMealThumb}
                  alt={ml.strMeal}
                />
              </div>
              
              <div className="p-3 flex-1 flex flex-col">
                <h3 className="font-bold text-sm mb-2 text-orange-400 line-clamp-1">
                  {ml.strMeal}
                </h3>
                
                <div className="space-y-1 mb-3 text-xs">
                  <p className="text-gray-300">
                    <span className="font-semibold text-gray-400">Category:</span> <span className="text-white text-xs line-clamp-1">{ml.strCategory}</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="font-semibold text-gray-400">Origin:</span> <span className="text-white text-xs line-clamp-1">{ml.strArea}</span>
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-2">
                  {ml.strIngredient1 && (
                    <span className="bg-orange-500 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">
                      {ml.strIngredient1}
                    </span>
                  )}
                  {ml.strIngredient2 && (
                    <span className="bg-gray-600 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">
                      {ml.strIngredient2}
                    </span>
                  )}
                  {ml.strIngredient3 && (
                    <span className="bg-gray-600 text-white px-1.5 py-0.5 rounded-full text-xs font-semibold">
                      {ml.strIngredient3}
                    </span>
                  )}
                </div>
                
                <button className="w-full mt-auto bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-1.5 px-2 rounded-md text-sm">
                  View Recipe
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {loading && (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      {!loading && meals.length === 0 && !error && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            Search for a meal to get started!
          </p>
        </div>
      )}
    </div>
  );
}

export default Form;