import React, { useContext } from "react";
import IvsmLoginForm from "../components/IvsmLoginForm";
import IvsmLoginQR from "../components/IvsmLoginQR";
import { UserAuthContext } from "../context/context";

const Login = function() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext)

  function login(event) {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return(
    <div className="loginForm">
      <h1 className="h1">Log in</h1>
      <div className="loginForm__backGround">
        <div className="loginForm__left">
          <IvsmLoginForm login={login}/>
        </div>  
        <div className="loginForm__right">
          <IvsmLoginQR />
        </div>  
      </div>
    </div>
  )
}

export default Login