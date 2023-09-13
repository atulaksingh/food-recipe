import React from 'react'
import { useAuth } from './AuthContext/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';

const  ProtectedRoutes =({childern}) =>{
    const {currentUser} = useAuth();
    console.log("hgh",currentUser)
  if(!currentUser){
    return <Navigate to={"/login"} />
  }
  return <Outlet {...childern}/>
}

export default ProtectedRoutes