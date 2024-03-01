import React, { useEffect } from "react";
import AuthProvider from "./components/AuthProvider";
import SidebarProvider from "./components/SidebarProvider";
import AppRouter from "./components/AppRouter";
import './styles/App.css';
                                                  
function App() {
  return (
    <SidebarProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </SidebarProvider>
  );
}

export default App;