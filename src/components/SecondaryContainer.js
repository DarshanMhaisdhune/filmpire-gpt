import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector((store)=> store.movies);
  // console.log(movies);
  return(
  
    <div className=' bg-black'>
       <div className='w-full relative z-20 -mt-40 pl-7'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>       
        <MovieList title={"Popular"} movies={movies.PopularMovies}/>
        <MovieList title={"TopRated Movies"} movies={movies.TopRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/>
       
       </div>
    </div>
 
  );
}

export default SecondaryContainer