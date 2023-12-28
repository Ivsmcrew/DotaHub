import React, { useContext } from "react";
import { UserAuthContext } from "../context/context";
import { Route, Routes } from "react-router-dom";
import { routes } from "../router/router";

const AppRouter = function() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext);

  if (isAuth) {
    return (
      <Routes>
        {routes.map((route) => 
          <Route 
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        )}
      </Routes>
    )
  } else {
    return (
      <Routes>
        {routes.map((route) => 
          <Route 
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        )}
      </Routes>
    )
  }
}

export default AppRouter