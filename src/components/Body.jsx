import React from 'react'
import { Outlet } from 'react-router-dom'
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate} from 'react-router-dom'
import { auth } from '../utills/firebase';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addUser, removeUser } from '../utills/userSlice';


const Body = () => {
  const usedispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
 
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid ,email,displayName,photoURL} = user;
        usedispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
        navigate('/browse');
      } else {
        usedispatch(removeUser())
        navigate('/');
      }
    });

    return () => unsubscribe();
    
    } , [] )

  return (
    <div>
         <Outlet />
    </div>
  )
}

export default Body