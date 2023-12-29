import React, { useEffect, useState } from "react";
import { UserAuthContext } from "../context/context";

const AuthProvider = function({children}) {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
  }, [])

  return (
    <UserAuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export default AuthProvider