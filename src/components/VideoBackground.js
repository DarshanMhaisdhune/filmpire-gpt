import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";


const VideoBackground = ({ movieId }) => {  
    const trailerVideo = useSelector((store)=> store.movies.trailerVideo);
    useTrailerVideo(movieId);
    
    return (
    <div className="w-full">
            <iframe className="w-screen aspect-video overflow-hidden" src={"https://www.youtube.com/embed/"+ trailerVideo?.key +"?&autoplay=1&mute=1" }title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground;