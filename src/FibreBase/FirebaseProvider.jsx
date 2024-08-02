import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut as firebaseSignOut
  } from 'firebase/auth';
  import React, { createContext, useEffect, useState } from 'react';
  import auth from './FirebaseConfig';
  import toast from 'react-hot-toast';
  
  export const AuthContent = createContext(null);
  
  const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    const signOut = async () => {
      setLoading(true);
      return firebaseSignOut(auth)
        .then(() => {
          setUser(null);
          setLoading(false);
          toast.success('Logout Successful');
        })
        .catch((error) => {
          console.error(error.message);
          setLoading(false);
        });
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const contextValue = {
      createUser,
      user,
      signInUser,
      loading,
      signOut
    };
  
    return (
      <AuthContent.Provider value={contextValue}>
        {children}
      </AuthContent.Provider>
    );
  };
  
  export default FirebaseProvider;
  