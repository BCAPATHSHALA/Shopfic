/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./SaleProductCard.scss";
import product1 from "../../../assets/product1.png";
import product2 from "../../../assets/product2.png";

const SaleProductCard = ({ darkLight }) => {
  const products = [
    {
      image: product1,
      name: "Earbuds",
      price: 400,
    },
    {
      image: product2,
      name: "Boat Earbuds",
      price: 300,
    },
  ];
  return (
    <>
      {products.map((product, index) => {
        return (
          <div
            className={`ProductCard ${darkLight ? "darkLight" : ""}`}
            key={index}
          >
            <div className="innerCardDiv">
              <div className={`imgDiv ${darkLight ? "darkLight" : ""}`}>
                <img src={product.image} alt={product.name} />
              </div>
              <p className={`${darkLight ? "darkLight" : ""}`}>
                {product.name}
              </p>
              <Link to={"/"} className={`${darkLight ? "darkLight" : ""}`}>
                {` Only ${product.price}`}
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SaleProductCard;
