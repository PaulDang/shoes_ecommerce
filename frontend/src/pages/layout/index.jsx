import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
