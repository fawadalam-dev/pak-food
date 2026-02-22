import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [userMeal, setUserMeal] = useState("")
  const [meals, setMeals] = useState([])

  async function getMeals(e) {
    e.preventDefault()
    try {
      const mealRes = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${userMeal}`)
      setMeals(mealRes.data.meals)
    }
    catch (err) {
      alert("something went wrong, try again later")
    }
  }

  return (


    <>

      <form onSubmit={getMeals}>
        <div class="mt-6 ..."></div>

        <input type="text" class="w-64 ... , h-10 ...  border-2 border-gray-300 focus:border-blue-600 ... ml-135 ... , mr-3 ... , mb-5 ..." name="meal" id="meal" onChange={(e) => setUserMeal(e.target.value)} />
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Search
        </button>
      </form>

      <div className="flex flex-wrap justify-evenly">
        {
          meals.map((ml) => {
            console.log(ml)
            return (
              <div>


                <div class="max-w-sm rounded overflow-hidden shadow-lg">
                  <img class="w-full" src={ml.strMealThumb} alt="Sunset in the mountains" />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2"> {ml.strMeal} </div>
                    <p class="text-gray-700 text-base">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                  </div>
                  <div class="px-6 pt-4 pb-2">
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App