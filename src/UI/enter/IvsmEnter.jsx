import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../context/context";
import classes from "./IvsmEnter.module.css";

const IvsmEnter = function() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext);

  function login() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  if (isAuth) {
    return(
      <Link onClick={login} className={classes.enter} to='/login'>
        <button>EXIT</button>
      </Link>
    )
  } else {
    return(
      <Link className={classes.enter} to='/login'>LOGIN</Link>
    )
  }
}

export default IvsmEnter