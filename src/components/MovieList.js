import React from 'react'
import MovieCart from './MovieCart';

const MovieList = ({title, movies}) => {
    
    // console.log(movies);
   return (
       <div className='px-4'>
          <h1 className='text-2xl py-4 text-white font-serif '>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar whitespace-nowrap '>
             <div className='flex'>
               {movies?.map(movie=><MovieCart key={movie.id} poster_path={movie.poster_path}/>)}              
             </div>
            </div>
      </div>
  )
}

export default MovieList;