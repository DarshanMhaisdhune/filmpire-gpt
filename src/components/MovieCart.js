import React from 'react'
import { MoviePoster_CdnUrl } from '../Utils/constants';

const MovieCart = ({ poster_path}) => {    
  if(!poster_path)return null ;
  return (
    <div className='w-32 pr-2'>
        <img className='rounded-md' src={MoviePoster_CdnUrl+poster_path} alt="Movie Cart" />
    </div>
  )
}

export default MovieCart;