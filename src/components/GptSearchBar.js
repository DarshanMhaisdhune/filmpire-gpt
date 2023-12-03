import openai from '../Utils/OpenAI';
import React, { useRef } from 'react';
import { API_OPTIONS } from '../Utils/constants';
import { useDispatch } from 'react-redux';
import { addGptMovies } from '../Utils/gptSlice';



const GptSearchBar = () => {

    const searchText = useRef(null);
    const dispatch = useDispatch();
    const searchMovieTMDB = async(movie)=>{

      const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);
      const json = await data.json();

      return json.results ;

    }

    const handleGptSearch= async()=>{

      try {
        
              const gptQuery = "Act as Movie Recommendation system and suggest some movies for the query :"+ searchText.current.value +". only give me name of 5 movies, comma separated like the example result given ahead. Example result: Pathan, Animal, Dunki, Catch Me If You Can, Inception";
              const gptResult = await openai.chat.completions.create({
                  messages: [{ role: "system", content: gptQuery }],
                  model: "gpt-3.5-turbo",
                });
              
                const gptMovieResult = gptResult.choices?.[0]?.message?.content.split(",");
                // console.log(gptMovieResult);

                const promiseArray = gptMovieResult.map((movie)=>searchMovieTMDB(movie));

                const tmdbResult = await Promise.all(promiseArray);
                dispatch(addGptMovies({movieNames:gptMovieResult, movieResults:tmdbResult}));
              
          } catch (error) {
                console.error('Error:', error);
          }                    
      }
    
  return (
    <div className='pt-[10%] flex justify-center'>
       
        <form className='w-1/2 bg-white bg-opacity-10 grid grid-cols-12 p-4 rounded-md' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type="text" placeholder=" what's in your mind ..." className='p-4 m-4 col-span-9 outline-none rounded-md' />
            <button className='col-span-3 m-4 p-4 font-semibold bg-blue-700 font-mono text-white rounded-lg hover:bg-blue-600' onClick={handleGptSearch}>Search</button>
        </form>
      
    </div>
  )
}

export default GptSearchBar;

