import React from 'react'
import { GptBG } from '../Utils/constants';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggest from './GptMovieSuggest';

const GptSearch = () => {
  return (
    <div >       
       <div className='fixed -z-10 '>
          <img className='w-screen' src={GptBG} alt="GPTBG" />
        </div> 
        <GptSearchBar/>
        <GptMovieSuggest/>
    </div>
  )
}

export default GptSearch;