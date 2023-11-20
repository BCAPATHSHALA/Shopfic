/* eslint-disable react/prop-types */
import "./BrowseProducts.scss";
import { CiSearch } from "react-icons/ci";

const BrowseProducts = ({ darkLight }) => {
  return (
    <div className={`BrowseProducts ${darkLight ? "darkLight" : ""}`}>
      <div className="left">
        <h2 className={`${darkLight ? "darkLight" : ""}`}>
          Browse million products for your needs
        </h2>
        <form>
          <div>
            <input type="text" placeholder="I want to buy..." />
            <button>
              <CiSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrowseProducts;
