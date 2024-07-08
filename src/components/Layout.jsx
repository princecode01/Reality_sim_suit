/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
// import Footer from "../ui/Footer";
import Header from "../ui/Header";
import ScrollArrow from "./ScrollArrow";

function Layout({logout,userData}) {
  return (
    <>
      <ScrollArrow />
      <Header logout={logout} userData={userData} />
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
