import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";



const usePopularMovies=()=>{

    const PopularMovies = useSelector((store)=> store.movies.PopularMovies);
    const dispatch = useDispatch();
    const getPopularMovies=async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", API_OPTIONS);
        const json = await data.json();
        // console.log(json);

       dispatch(addPopularMovies(json.results));
    }
     
    useEffect(()=>{
        !PopularMovies && getPopularMovies();
    },[])
}

export default usePopularMovies;