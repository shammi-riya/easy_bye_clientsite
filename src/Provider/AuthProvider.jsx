import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const gogoolProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const creaetUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const createGogoolUser = () => {
        setLoading(true)
        return signInWithPopup(auth, gogoolProvider)
    }


    const creteGithubUser = () => {
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])



   const forgetPassword = (email)=>{
     setLoading(true)
     return sendPasswordResetEmail(auth,email)
   
     
   }

    const logOut = ()=>{
        setLoading(true)
      return  signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        creaetUser,
        loginUser,
        createGogoolUser,
        creteGithubUser,
        forgetPassword ,
        logOut
    }


    return (
        <AuthContext.Provider  value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;