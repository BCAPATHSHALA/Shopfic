/* eslint-disable react/prop-types */
import { Fragment } from "react";
import "./simpleNavbar.scss";

const Simplenabvar = ({ darkLight }) => {
  const categories = ["Men", "Woman", "Accessories", "Winter", "Sale", "All"];

  return (
    <div className={`simpleNavbar ${darkLight ? "open" : ""}`}>
      {categories.map((category, index) => {
        return (
          <Fragment key={index}>
            <div className={`${darkLight ? "open" : ""}`} key={index}>
              {category}
            </div>{" "}
            <span className={`${darkLight ? "open" : ""}`}>{`${
              category === "All" ? "" : "|"
            }`}</span>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Simplenabvar;
