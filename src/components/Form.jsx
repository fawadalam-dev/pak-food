import "./Form.css";
import { useState } from "react";
import axios from "axios";
function Form({ onSearch, onSearchStateChange, meals: propsMeals }) {
  const [usermeal, setUserMeal] = useState("");
  const [meals, setMeals] = useState([]);
  async function getMeals(e) {
    e.preventDefault();
    try {
      const mealsRef = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${usermeal}`,
      );
      console.log(mealsRef.data.meals);
      setMeals(mealsRef.data.meals);
      onSearch(mealsRef.data.meals);
      onSearchStateChange(true);
    } catch (err) {
      alert("Some Error Occured");
    }
  }
  return (
    <div>
      <form onSubmit={getMeals}>
        <div className="mt-2 mx-auto w-1/2">
          <div className="flex items-center rounded-md bg-white/5 pl-3 outline-1 -outline-offset-1 outline-gray-600 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-500">
            <input
              id="usermeal"
              type="text"
              name="usermeal"
              placeholder="Search For meals"
              className="block min-w-0 grow bg-gray-800 py-1.5 pr-3 pl-1 text-base text-white placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
              onChange={(e) => setUserMeal(e.target.value)}
            />

            <button className="btn">Search</button>
          </div>
        </div>
      </form>
      <div className="flex flex-wrap justify-center gap-12">
        {meals.map((ml) => {
          return (
            <div
              key={ml.idMeal}
              className="w-3xs rounded overflow-hidden shadow-lg mt-5 "
            >
              <img
                className="w-full"
                src={ml.strMealThumb}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-[orangered]">
                  {ml.strMeal}
                </div>
                <p className="text-white text-base">
                  <p>Meal ID: {ml.idMeal}</p>
                  <p>Category: {ml.strCategory}</p>
                  <p>Country: {ml.strArea}</p>
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {ml.strIngredient2}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {ml.strIngredient3}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  {ml.strIngredient4}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Form;