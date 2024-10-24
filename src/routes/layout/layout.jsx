import "./layout.css";
import Navbar from '../../components/navbar/navBar';
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer";

function Layout() {
  return (
    <div className="layout">
        <Navbar />
      <div className="content">
        <Outlet/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;