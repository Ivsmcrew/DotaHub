import React, { useState } from "react";
import { UserAuthContext } from "../context/context";

const AuthProvider = function({children}) {
  const [isAuth, setIsAuth] = useState(false);

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