import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../Utils/FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { LOGO, UserIcon } from '../Utils/constants';
import { toggleGptSearch } from '../Utils/gptSlice';
import { IoHome } from "react-icons/io5";

const Header = () => {
 
  const showGptSearch =  useSelector(store => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store)=> store.user);
  const handleGptSearchClick=()=>{
      dispatch(toggleGptSearch());

  }
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
     
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {

        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName }= user;
          dispatch(addUser({uid:uid, email:email, displayName:displayName }));
          navigate("/browse")                   
        } 

        else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")         
        }

      });
      return () => unsubscribe();
},[])


  return (
    <>
    <div className='absolute px-8 py-2 w-full bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-52' src={LOGO} alt="Logo" />
    
    {user && (
    <div className='flex p-2'>
        <button className='bg-white text-purple-900 font-semibold rounded-lg px-4 mx-2 h-12 mt-2 hover:bg-slate-300' onClick={handleGptSearchClick}>{showGptSearch ? (<IoHome />) : "Gpt Search"} </button>
        <img className='w-10 h-10 m-2' src={UserIcon} alt="UserIcon" />
        <button className=' text-white bg-transparent text-base font-medium -mt-4' onClick={handleSignOut}>Log-Out</button>
    </div>
    )}
    </div>

    </>
  )
}

export default Header