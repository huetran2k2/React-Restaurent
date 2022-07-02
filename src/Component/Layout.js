import { Outlet, Link } from "react-router-dom";
import Footer from "./Restaurant/Footer";
import Header from "./Restaurant/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Link to="/Item_card">
        <i
          style={{ position: "fixed", bottom: 50, right: 50, fontSize: "30px", color:"#FFB300" }}
          className="fa-solid fa-cart-shopping"
        ></i>
      </Link>
    </>
  );
};
export default Layout;
