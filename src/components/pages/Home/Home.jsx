/* eslint-disable react/prop-types */
import Simplenabvar from "../../layouts/simple nabvar/Simplevabvar";
import MetaData from "../../utility/MetaData";
import { SaleProductCard1, SaleProductCard2 } from "../Product/SaleProductCard";
import BrowseProducts from "./BrowseProducts";
import ImageCarousel from "./ImageCarousel";
import "./home.scss";

const Home = ({ darkLight }) => {
  return (
    <div className={`home ${darkLight ? "darkLight" : ""}`}>
      <MetaData title={"Shopfic"} />
      <Simplenabvar darkLight={darkLight} />
      {/* Sale Section1 and 2 with crousel */}
      <div className={`InnerHome ${darkLight ? "darkLight" : ""}`}>
        <div className={`section1 ${darkLight ? "darkLight" : ""}`}>
          <SaleProductCard1 darkLight={darkLight} />
        </div>
        <ImageCarousel />
        <div className={`section2 ${darkLight ? "darkLight" : ""}`}>
          <SaleProductCard2 darkLight={darkLight} />
        </div>
      </div>
      {/* Special Offers Section */}
      <div className={`saleDiv ${darkLight ? "darkLight" : ""}`}>
        <h1>
          Shopfic <span>Sale</span>
        </h1>
      </div>
      {/* Browse million products for your needs */}
      <BrowseProducts darkLight={darkLight} />
    </div>
  );
};

export default Home;
