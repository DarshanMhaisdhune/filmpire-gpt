import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../Utils/FirebaseConfig';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { SignBG } from '../Utils/constants';


const Login = () => {

    const [isSignInForm, setIsSignInForm]= useState(true);
    const  email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const [errorMessage, setErrorMessage] =useState(null);
    
    const dispatch = useDispatch();

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
        // console.log(isSignInForm)
    }

    const haandleBtnClick=()=>{
        //Check for validations   
        const message =checkValidData (email.current.value, password.current.value);       
        setErrorMessage(message);

        if(message) return;

        if(!isSignInForm){
            // Sign Up Logic
            createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up and Sign in default
                    const user = userCredential.user;
                    // console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value 
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName }= auth.currentUser; 
                        dispatch(addUser({uid:uid, email:email, displayName:displayName }));
                        
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-"+ errorMessage);
                });
        }
        else{
            // Sign In Logic
            signInWithEmailAndPassword(auth,email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // console.log(user);
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-"+ errorMessage);
            });
        }
    }
  return (
    <div>
        <Header/>

        <div className='absolute'>
            <img src={SignBG} alt="SignBg" />
        </div>

        <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute my-32 mx-auto right-0 left-0 p-16 w-2/6 text-white bg-opacity-90 rounded-md'>
            <h1 className='font-semibold  text-3xl py-4'> {isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
                   <input ref={name} className='m-2 p-4 w-full rounded-md bg-gray-700 outline-none hover:placeholder:font-light hover:placeholder:text-right' type="text" placeholder='Full Name' />
            )}
            <input ref={email} className='m-2 p-4 w-full rounded-md bg-gray-700 outline-none hover:placeholder:font-light hover:placeholder:text-right' type="text" placeholder='Email address' /><br/>
            <input ref={password} className='m-2 p-4 w-full rounded-md bg-gray-700 outline-none hover:placeholder:font-light hover:placeholder:text-right' type="password" placeholder='password'  /><br/>

            <p className='text-sm text-yellow-400 p-2'>{errorMessage}</p>
            <button className='m-2 p-4 mt-7 rounded-md w-full font-semibold bg-red-700' onClick={haandleBtnClick}> {isSignInForm ? "Sign In" : "Sign Up"}</button>
            {isSignInForm ?  <p className='text-gray-500'>New to Netflix?<a className='text-white' href="/#" onClick={toggleSignInForm}> Sign up</a></p> : <p className='text-gray-500'> Already a user? <a className='text-white' href="/#" onClick={toggleSignInForm}> Sign in Now</a> </p> }
           
        </form>

    </div>
  )
}

export default Login