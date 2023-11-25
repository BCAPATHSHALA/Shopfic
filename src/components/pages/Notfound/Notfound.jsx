import { Link } from "react-router-dom";
import notfound from "../../../assets/404.png";
import "./notfound.scss";

const Notfound = () => {
  return (
    <div className="notefound">
      <div className="imgDiv">
        <img src={notfound} alt="not found page" />
      </div>
      <button>
        <Link to={"/"}>Go Home</Link>
      </button>
    </div>
  );
};

export default Notfound;
