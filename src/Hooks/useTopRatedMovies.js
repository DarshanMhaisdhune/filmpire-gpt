import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constants";


const useTopRatedMovies=()=>{

      const TopRatedMovies = useSelector((store)=> store.movies.TopRatedMovies);
      const dispatch = useDispatch();
      const getTopRatedMovies=async()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        dispatch(addTopRatedMovies(json.results));
      }

      useEffect(()=>{
           !TopRatedMovies && getTopRatedMovies();
      },[])
}

export default useTopRatedMovies;