import React, { useState } from "react";
import { SidebarContext } from "../context/context";

const SidebarProvider = function({children}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <SidebarContext.Provider value={{
      isActive,
      setIsActive
    }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider