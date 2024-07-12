/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink, useNavigate, } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
} from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";



function NavbarComponent({ logout, userData }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  const handleOpenToggle = function () {
    setIsMenuOpen((open) => !open);
  };

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="navbar bg-transparent text-white font-sans"
    >
      <NavbarContent>
        <NavbarBrand className="font-bold text-xl font-reddit">
          Reality SimSuit
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex justify-between items-center"
        justify="center"
      >
        <NavbarItem>
          <NavLink to="/">Home</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to="/about">About</NavLink>
        </NavbarItem>


      </NavbarContent>

      <NavbarContent
        justify="end"
        className="hidden md:flex justify-between items-center gap-4"
      >
        {!userData && <NavbarItem>
          <NavLink to="/login">Sign In</NavLink>
        </NavbarItem>}
        {/* <NavbarItem>
          <NavLink to="/signup" className="border border-white px-3 py-2">Sign Up</NavLink>
        </NavbarItem> */}

        {userData && <>
          <NavbarItem>
            <FaUserCircle onClick={() => navigate(`/user/${userData}`)} className="cursor-pointer text-xl hover:scale-110 transition-all duration-250" />
          </NavbarItem>
          <NavbarItem>
            <NavLink onClick={logout}>Log Out</NavLink>
          </NavbarItem>
        </>}

      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="md:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem
          className=" hover:text-light hover:bg-customBlue transition-all ease-in duration-300 cursor-pointer"
        >
          <NavLink
            onClick={handleOpenToggle}
            className="w-full block  p-3"
            to="/"
          >
            Home
          </NavLink>
        </NavbarMenuItem>
        <NavbarMenuItem
          className=" hover:text-light hover:bg-customBlue transition-all ease-in duration-300 cursor-pointer"
        >
          <NavLink
            onClick={handleOpenToggle}
            className="w-full block  p-3"
            to="/about"
          >
            About
          </NavLink>
        </NavbarMenuItem>
        {!userData && <NavbarMenuItem
          className=" hover:text-light hover:bg-customBlue transition-all ease-in duration-300 cursor-pointer"
        >
          <NavLink
            onClick={handleOpenToggle}
            className="w-full block  p-3"
            to="/login"
          >
            Sign in
          </NavLink>
        </NavbarMenuItem>}
        {userData && <>
          <NavbarMenuItem
            className=" hover:text-light hover:bg-customBlue transition-all ease-in duration-300 cursor-pointer"
          >
            <NavLink
              onClick={handleOpenToggle}
              className="w-full block  p-3"
              to={`/user/${userData}`}
            >
              Profile
            </NavLink>
          </NavbarMenuItem>
          <NavbarMenuItem
            className=" hover:text-light hover:bg-customBlue transition-all ease-in duration-300 cursor-pointer"
          >
            <NavLink
              onClick={() => {
                handleOpenToggle()
                logout()
              }}
              className="w-full block  p-3"
            >
              Log Out
            </NavLink>
          </NavbarMenuItem>
        </>
        }
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComponent;
