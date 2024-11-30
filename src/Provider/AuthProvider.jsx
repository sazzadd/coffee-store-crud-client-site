import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { createContext, useState } from "react";
import app from "../firebase/firebase.config"; // সঠিকভাবে ইম্পোর্ট

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    loading,
    setUser,
    createNewUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
