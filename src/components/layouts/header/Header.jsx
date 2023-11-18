/* eslint-disable react/prop-types */
import "./header.scss";
import headerLOGO from "../../../assets/Shopfic Logo Header.png";
import headerLOGODark from "../../../assets/Shopfic Logo Header Dark.png";

const Header = ({darkLight}) => {
  return (
    <div className={`header ${darkLight ? "open" : ""}`}>
      <div className="headerLOGO">
        <img src={darkLight ? headerLOGODark : headerLOGO} alt="Shopfic" />
      </div>
    </div>
  );
};

export default Header;
