/* eslint-disable react/prop-types */
import "./simpleNavbar.scss";

const Simplenabvar = ({darkLight}) => {
  const categories = ["Men", "Woman", "Accessories", "Winter", "Sale", "All"];

  return (
    <div className={`simpleNavbar ${darkLight ? "open" : ""}`}>
      {categories.map((category, index) => {
        return (
          <>
            <div className={`${darkLight ? "open" : ""}`} key={index}>
              {category}
            </div>{" "}
            <span className={`${darkLight ? "open" : ""}`}>{`${
              category === "All" ? "" : "|"
            }`}</span>
          </>
        );
      })}
    </div>
  );
};

export default Simplenabvar;
