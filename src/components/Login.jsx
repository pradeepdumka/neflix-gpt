import React, { useRef, useState } from 'react'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utills/firebase';
import Header from './Header'
import { BG_URL } from '../utills/constants'
import { validateForm } from '../utills/validation'
const Login = () => {
  const [isSignUp ,setIsSignUp] = useState(false);
  const [errorMessage ,setErrorMessage] = useState('');
  
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const name = useRef(null);
  

  const toggleSignUp =()=>{
    setIsSignUp(!isSignUp);
  }

  const handleSubmit = ()=>{
   
    const formValidationData= validateForm(email.current.value,password.current.value,name?.current?.value,confirmPassword?.current?.value);
    setErrorMessage(formValidationData);
    if(formValidationData) return;

    if(isSignUp){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("user",user)
          setErrorMessage("");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
          // ..
        });
    }else{
       
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          setErrorMessage("");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + '-' + errorMessage);
        });
    }
  }
  return (
    <div>
      <Header />

      <div className='absolute'>
       <img src={BG_URL} alt="logo" />
      </div>

      <form className= 'absolute w-1/3 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignUp? "Sign up":"Sign In"} </h1>

        {isSignUp &&   <input ref={name} type="text" placeholder='Name'  className='p-4 my-4 w-full bg-gray-700 '/>}
      
        <input type="text" ref={email} placeholder='Email address or phone number'   className='p-4 my-4 w-full bg-gray-700 '/>
        <input type="password" ref={password} placeholder='Password'    className='p-4 my-4 w-full bg-gray-700 '/>
        
        {isSignUp &&  <input type="password" ref={confirmPassword} placeholder='Confirm Password'  className='p-4 my-4 w-full bg-gray-700 '/>}
        { errorMessage && <p className='text-sm text-red-500'>{errorMessage}</p>}
        <button type='button' className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={()=>handleSubmit()}>{isSignUp? "Sign up":"Sign in"}</button>
        <p className='p-1 text-md'>{isSignUp? "Already have an account ":"New to Netflix?"} <span className='text-red-700 cursor-pointer' onClick={()=>toggleSignUp()}>{isSignUp? "Login ":"New to Netflix?"}</span> </p>
       </form>

    </div>
  )
}

export default Login;