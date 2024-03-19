import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../context/context";
import classes from "./IvsmEnter.module.css";

const IvsmEnter = memo(function IvsmEnter() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext);

  function exit() {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  if (isAuth) {
    return(
      <Link onClick={exit} className={classes.enter} to='/login'>
        <button>EXIT</button>
      </Link>
    )
  } else {
    return(
      <Link className={classes.enter} to='/login'>LOGIN</Link>
    )
  }
})

export default IvsmEnter