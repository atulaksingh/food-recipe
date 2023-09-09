import { createContext, useContext, useEffect, useState } from "react";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext({
  currentUser: null,
  register:()=> Promise ,
});
export const useAuth = () => useContext(AuthContext);
export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
function register(email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

  const value = {
    currentUser,
    register
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
