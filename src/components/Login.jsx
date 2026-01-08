import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utills/constants'
const Login = () => {
  const [isSignUp ,setIsSignUp] = useState(false);
  const toggleSignUp =()=>{
    setIsSignUp(!isSignUp);
  }
  return (
    <div>
      <Header />

      <div className='absolute'>
       <img src={BG_URL} alt="logo" />
      </div>

      <form className= 'absolute w-1/3 p-12 bg-black bg-opacity-80 my-36 mx-auto right-0 left-0 text-white rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignUp? "Sign up":"Sign In"} </h1>

        {isSignUp &&   <input type="text" placeholder='Name'  className='p-4 my-4 w-96 bg-gray-700 '/>}
      
        <input type="text" placeholder='Email address or phone number'  className='p-4 my-4 w-96 bg-gray-700 '/>
        <input type="password" placeholder='Password'  className='p-4 my-4 w-96 bg-gray-700 '/>
        
        {isSignUp &&  <input type="password" placeholder='Confirm Password'  className='p-4 my-4 w-96 bg-gray-700 '/>}
       
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignUp? "Sign up":"Sign in"}</button>
        <p className='p-1 text-md'>{isSignUp? "Already have an account ":"New to Netflix?"} <span className='text-red-700 cursor-pointer' onClick={()=>toggleSignUp()}>{isSignUp? "Login ":"New to Netflix?"}</span> </p>
       </form>

    </div>
  )
}

export default Login;