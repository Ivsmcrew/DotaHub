import React from "react";
import AuthProvider from "./components/AuthProvider";
import SidebarProvider from "./components/SidebarProvider";
import IvsmNavbar from "./UI/navbar/IvsmNavbar";
import IvsmSidebar from "./UI/sidebar/IvsmSidebar";
import AppRouter from "./components/AppRouter";
import Footer from "./UI/footer/Footer";
import './styles/App.css';
                                                  
function App() {
  return (
    <SidebarProvider>
      <AuthProvider>
        <IvsmNavbar />
        <IvsmSidebar />
        <AppRouter />
        <Footer />
      </AuthProvider>
    </SidebarProvider>
  );
}

export default App;