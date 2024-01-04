import React from "react";
import AuthProvider from "./components/AuthProvider";
import IvsmNavbar from "./UI/navbar/IvsmNavbar";
import './styles/App.css';
import AppRouter from "./components/AppRouter";
import Footer from "./UI/footer/Footer";
                                                  
function App() {
  return (
    <AuthProvider>
      <IvsmNavbar />
      <AppRouter />
      <Footer />
    </AuthProvider>
  );
}

export default App;

