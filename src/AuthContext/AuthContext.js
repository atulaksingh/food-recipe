import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
const AuthContext = createContext({
  currentUser: null,
  register: () => Promise,
  login: () => Promise,
  logout:()=> Promise,
});
export const useAuth = () => useContext(AuthContext);
export default function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);

    });
    return () => {
      Unsubscribe();
      // console.log("uu",currentUser)
    };
  }, []);
  // console.log("kk",currentUser)

  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
    return signOut(auth)
  }

  const value = {
    currentUser,
    register,
    login,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
