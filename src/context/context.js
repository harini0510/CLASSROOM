import { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../lib/firebase";

const AddContext = createContext();

export function useLocalContext() {
  return useContext(AddContext);
}

export function ContextProvider({ children }) {
  const [createClassDialog, setCreateClassDialog] = useState(false);
  const [joinClassDialog, setJoinClassDialog] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInMail, setLoggedInMail] = useState(null);

  const login = () => auth.signInWithPopup(provider);

  const logoutUser = async() => await auth.signOut()
  .then(()=> {
    console.log("hello")
    window.open('/', '_self')
  })
  .catch(error=>console.log(error));
  
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setLoggedInMail(authUser.email);
        setLoggedInUser(authUser);
      } else {
        setLoggedInMail(null);
        setLoggedInUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const value = {
    createClassDialog,
    setCreateClassDialog,
    joinClassDialog,
    setJoinClassDialog,
    login,
    logoutUser,
    loggedInMail,
    loggedInUser,
  };

  return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
}
