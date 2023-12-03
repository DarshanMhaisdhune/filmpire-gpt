import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggest = () => {

  const {movieNames,  movieResults} = useSelector((store)=> store.gpt);
  if(!movieNames) return null ;
  
  return (
    <div className='bg-gray-700 bg-opacity-50 p-7 m-4 rounded-lg'>
      <div>
        {movieNames.map((movieName, index)=>(<MovieList key={movieName} title={movieName} movies={movieResults[index]}/>))}
        </div>
    </div>
  )
}

export default GptMovieSuggest;