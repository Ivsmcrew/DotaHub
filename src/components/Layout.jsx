import { Outlet } from "react-router-dom";
import IvsmNavbar from "../UI/navbar/IvsmNavbar";
import IvsmSidebar from "../UI/sidebar/IvsmSidebar";
import Footer from "../UI/footer/Footer";

const Layout = function() {
  return(
    <>
      <IvsmNavbar />
      <IvsmSidebar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout