import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";

const useTrailerVideo = (movieId)=>{

    const dispatch = useDispatch();   
    const getMovieVideo = async () =>  {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);

        const filterData = json.results?.filter((video)=>video.type ==="Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0] ;
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }; 

    useEffect(()=>{
        getMovieVideo();
    },[])

};

export default useTrailerVideo ;