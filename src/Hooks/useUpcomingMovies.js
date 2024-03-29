import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";


const useUpcomingMovies=()=>{

    const UpcomingMovies = useSelector((store)=> store.movies.UpcomingMovies);
    const dispatch = useDispatch();
    const  getUpcomingMovies=async()=>{

        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
       !UpcomingMovies && getUpcomingMovies();
    },[])

}

export default useUpcomingMovies;