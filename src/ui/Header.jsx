/* eslint-disable react/prop-types */
import NavbarComponent from "../components/Navbar";

function Header({logout,userData}) {
  return (
    <header className="sticky top-0 z-50 bg-customBlue text-light leading-5">
      <NavbarComponent logout={logout} userData={userData} />
    </header>
  );
}

export default Header;

