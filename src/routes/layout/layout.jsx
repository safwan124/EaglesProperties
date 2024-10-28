import "./layout.css";
import Navbar from '../../components/navbar/navBar';
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/footer/footer";

function Layout() {
  const location = useLocation();
  return (
    <div className="layout">
        <Navbar />
      <div className="content">
        <Outlet/>
      </div>
      <div>
      {location.pathname !== "/contact" && (
        <Footer />
      )}
      </div>
    </div>
  );
}

export default Layout;