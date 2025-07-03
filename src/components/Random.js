import React, { useState } from 'react'
import { useEffect } from 'react';
const Random = () => {
    const [random, setRandom] = useState({})
     useEffect(() => {
        RandomMeal();
      }, []);
    
      const RandomMeal = async () => {
        const data = await fetch(
          "https://www.themealdb.com/api/json/v1/1/random.php"
        );
        const json = await data.json();
        // console.log(json.meals[0]);
        setRandom(json.meals[0])
      };
      const {strMealThumb , strMeal} = random
  return (
    <div className='text-black text-center m-2'>
        <h1 className='text-xl font-bold m-2 text-blue-500'>Random Meal</h1>
        <img className='w-56 m-auto' src={strMealThumb} alt="" />
        <p className='m-2'>{strMeal}</p>
        <button onClick={RandomMeal} className='bg-blue-400 text-gray-500 p-1 border-black border-solid border-2 rounded-md'>Get Another Meal</button>
    </div>
  )
}

export default Random