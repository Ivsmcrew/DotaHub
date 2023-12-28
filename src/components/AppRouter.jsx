import React, { useContext } from "react";
import { UserAuthContext } from "../context/context";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/router";

const AppRouter = function() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext);

  if (isAuth) {
    return (
      <Routes>
        {privateRoutes.map((route) => 
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
        {publicRoutes.map((route) => 
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