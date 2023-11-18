/* eslint-disable react/prop-types */
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GiMoon } from "react-icons/gi";
import { WiMoonAltWaxingCrescent5 } from "react-icons/wi";
import logo from "../../../assets/shopfic logo.png";

const Navbar = ({isOpen, toggleNavbar, darkLight, darkLightFun}) => {
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
      <ul>
        <li onClick={toggleNavbar}>Home</li>
        <li onClick={toggleNavbar}>Products</li>
        <li onClick={toggleNavbar}>Contact</li>
        <li onClick={toggleNavbar}>About</li>
      </ul>

      {/* Cart and Search BTNs */}
      <ul
        className={`extraBTN ${
          darkLight ? "darkLightForNabvarLiHoverBackground" : ""
        }`}
      >
        <li onClick={toggleNavbar}>
          <FaShoppingBag /> <span>CART</span>
        </li>
        <li onClick={toggleNavbar}>
          <BsSearch /> <span>SEARCH</span>
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
                <li onClick={toggleNavbar}>Logout</li>
                <li onClick={toggleNavbar}>Profile</li>
              </>
            ) : (
              <>
                <li onClick={toggleNavbar}>Logout</li>
                <li onClick={toggleNavbar}>Profile</li>
                <li onClick={toggleNavbar}>Dashboard</li>
              </>
            )}
          </>
        ) : (
          <>
            <li onClick={toggleNavbar}>Login</li>
            <li onClick={toggleNavbar}>Signup</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
