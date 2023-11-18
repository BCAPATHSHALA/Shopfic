/* eslint-disable react/prop-types */
import Simplenabvar from "../../layouts/simple nabvar/Simplevabvar";
import SaleProductCard from "../Product/SaleProductCard";
import ImageCarousel from "./ImageCarousel";
import "./home.scss";

const Home = ({ darkLight }) => {
  return (
    <div className="home">
      <Simplenabvar darkLight={darkLight} />
      {/* Sale Section1 and 2 with crousel */}
      <div className={`InnerHome ${darkLight ? "darkLight" : ""}`}>
        <div className={`section1 ${darkLight ? "darkLight" : ""}`}>
          <SaleProductCard darkLight={darkLight} />
        </div>
        <ImageCarousel />
        <div className={`section2 ${darkLight ? "darkLight" : ""}`}>
          <SaleProductCard darkLight={darkLight} />
        </div>
      </div>
      {/* Special Offers Section */}
      <div className={`saleDiv ${darkLight ? "darkLight" : ""}`}>
        <h1>
          Shopfic <span>Sale</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
