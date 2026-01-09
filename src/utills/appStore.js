import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from "../utills/userSlice";
const appStore = configureStore({
    reducer:{
        user:useReducer
    }
})


export default appStore; 