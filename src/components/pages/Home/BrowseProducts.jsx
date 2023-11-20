import "./BrowseProducts.scss";
import img1 from "../../../assets/browserSearch.png";
import { CiSearch } from "react-icons/ci";

const BrowseProducts = () => {
  return (
    <div className="BrowseProducts">
      <div className="left">
        <h2>Browse million products for your needs</h2>
        <form>
          <div>
            <input type="text" placeholder="I want to buy..." />
            <button><CiSearch/></button>
          </div>
        </form>
      </div>
      <div className="right">
        <img src={img1} alt="Shopfic" />
      </div>
    </div>
  );
};

export default BrowseProducts;
