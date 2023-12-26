import React from "react";
import Login from "./pages/Login";
import AuthProvider from "./components/AuthProvider";
import './styles/App.css'

function App() {
  return (
    <AuthProvider>
      <Login /> 
    </AuthProvider>
  );
}

export default App;
