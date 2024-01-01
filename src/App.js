import React from "react";
import AuthProvider from "./components/AuthProvider";
import IvsmNavbar from "./UI/navbar/IvsmNavbar";
import './styles/App.css';
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <AuthProvider>
      <IvsmNavbar />
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

