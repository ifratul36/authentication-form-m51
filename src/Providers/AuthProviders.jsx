import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
// const name = 'regsitration log';
const createUser = (email, password) =>{
  setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signInUser = (email, password) =>{
  setLoading(true);
  console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
}


const signInWithGoogle = () =>{
   return signInWithPopup(auth, googleProvider)
}

const signOutUser = () =>{
  setLoading(true);
  return signOut(auth);
}

useEffect(() =>{
  const unSubscribe = onAuthStateChanged(auth, currentUser =>{
    console.log(currentUser);
    setUser(currentUser);
    setLoading(false)
  })

  return () =>{
    unSubscribe();
  }
})

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;
