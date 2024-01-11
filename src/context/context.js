import React from "react";

export const UserAuthContext = React.createContext({
  isAuth: null,
  setIsAuth: null
});

export const SidebarContext = React.createContext({
  isActive: null,
  setIsActive: null
})
