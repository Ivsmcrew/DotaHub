import React, { useContext } from "react";
import { UserAuthContext } from "../context/context";
import { Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../router/router";
import Layout from "../components/Layout";

const AppRouter = function() {
  const {isAuth, setIsAuth} = useContext(UserAuthContext);

  let routes = isAuth ? privateRoutes : publicRoutes;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {routes.map((route) => 
          <Route 
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        )} 
      </Route>
    </Routes>
  )
}

export default AppRouter