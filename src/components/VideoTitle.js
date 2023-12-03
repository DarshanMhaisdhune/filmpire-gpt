import React from 'react';
import { FaCirclePlay  } from "react-icons/fa6";
import { MdInfoOutline } from "react-icons/md";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-72 px-11 absolute text-white bg-gradient-to-r from-black w-screen aspect-video overflow-x-hidden'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='text-lg w-1/2 p-2 font-sans'>{overview}</p>
        <div className='flex'>
            <button className=' flex bg-white text-black text-lg font-semibold rounded-lg px-7 p-3 bg-opacity-80 items-center gap-1 m-2 hover:bg-opacity-60'>< FaCirclePlay />Play</button>
            <button className='flex bg-gray-300 text-black text-lg rounded-lg px-5 p-3 bg-opacity-50 m-2 items-center gap-1 hover:bg-opacity-40'><MdInfoOutline />More Info </button>
        </div>
    </div>
  )
}

export default VideoTitle