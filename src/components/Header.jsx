import React from 'react'
import { LOGO ,USER_AVATAR} from '../utills/constants'

import {  signOut } from "firebase/auth";

import { auth } from '../utills/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector((store)=> store.user);
  const handleSignOut = ()=>signOut(auth).then(() => {}).catch(() => {});
  
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44'src={LOGO} alt="logo" />
      { 
      user && <div className='flex items-center'>
        <img  className="w-10 h-10 " src= {user.photoURL} alt="user" />
        <button className='text-md font-bold text-red-700 pl-1 cursor-pointer hover:underline' onClick={()=>handleSignOut()} > Sign out</button>
      </div>
      
      }
     
    </div>
  )
}

export default Header