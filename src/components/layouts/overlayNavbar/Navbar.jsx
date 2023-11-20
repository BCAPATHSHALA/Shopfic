/* eslint-disable react/prop-types */
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiMoon } from "react-icons/gi";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";
import logo from "../../../assets/shopfic logo.png";
import { Link } from "react-router-dom";

const Navbar = ({ isOpen, toggleNavbar, darkLight, darkLightFun }) => {
  // User Object
  const user1 = {
    role: "admin",
    isLogin: true,
  };

  // Button Icon Object
  const btnObj = {
    open: <GiHamburgerMenu />,
    close: <AiOutlineClose />,
    dark: <GiMoon />,
    light: <WiMoonAltWaxingCrescent5 />,
  };

  // HUMBURGER Button Icons Condition
  const buttonText = isOpen ? btnObj.close : btnObj.open;
  // DARK AND LIGHT Button Icons Condition
  const darkLightBTN = darkLight ? btnObj.dark : btnObj.light;

  return (
    <div
      className={`navbar ${darkLight ? "darkLightForNavbar" : ""} ${
        isOpen ? "open" : ""
      }`}
    >
      {/* Humburgger BTN */}
      <div
        className={`toggle-button ${isOpen ? "shiftBTN" : ""}`}
        onClick={toggleNavbar}
      >
        {buttonText}
      </div>

      {/* Dark and Light BTN */}
      <div
        className={`darkLightBTN ${darkLight ? "openBTN" : ""}`}
        onClick={darkLightFun}
      >
        {darkLightBTN}
      </div>

      {/* Logo Image */}
      <div className="logoImg">
        <img src={logo} alt="shopfic" />
      </div>

      {/* Menubar BTNs */}
      <ul className="menuBar">
        <li onClick={toggleNavbar}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to="/products">Products</Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to="/about">About</Link>
        </li>
      </ul>

      {/* Cart and Search BTNs */}
      <ul
        className={`extraBTN ${
          darkLight ? "darkLightForNabvarLiHoverBackground" : ""
        }`}
      >
        <li onClick={toggleNavbar}>
          <Link to="/cart">
            <FaShoppingBag /> <span>CART</span>
          </Link>
        </li>
        <li onClick={toggleNavbar}>
          <Link to="/search">
            <BsSearch /> <span>SEARCH</span>
          </Link>
        </li>
      </ul>

      {/* Users and Admin BTNs */}
      <ul
        className={`extraBTN LSLPD ${
          darkLight ? "darkLightForNabvarLiHoverBackground" : ""
        }`}
      >
        {user1.isLogin ? (
          <>
            {user1.role === "user" ? (
              <>
                <li onClick={toggleNavbar}>
                  <Link to="/logout">Logout</Link>
                </li>
                <li onClick={toggleNavbar}>
                  <Link to="/profile">Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li onClick={toggleNavbar}>
                  <Link to="/logout">Logout</Link>
                </li>
                <li onClick={toggleNavbar}>
                  <Link to="/profile">Profile</Link>
                </li>
                <li onClick={toggleNavbar}>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            )}
          </>
        ) : (
          <>
            <li onClick={toggleNavbar}>
              <Link to="/login">Login</Link>
            </li>
            <li onClick={toggleNavbar}>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
