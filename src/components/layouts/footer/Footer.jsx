import { Link } from "react-router-dom";
import "./footer.scss";
import { FaInstagram, FaSquareTwitter, FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiLeetcode } from "react-icons/si";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer">
      <div className="section1">
        <div className="div1">
          <div className="log">
            <h1>
              Shop<span>fic</span>
            </h1>
            <p>Best product selling e-shop</p>
          </div>
          <div className="aboutUs">
            <Link to={"/aboutus"}>
              <h3>About Us</h3>
            </Link>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              praesentium aperiam molestiae Lorem ipsum dolor sit.
            </p>
          </div>
          <div className="contactUs">
            <Link to={"/contactus"}>
              <h3>Contack Us</h3>
            </Link>
            <p>Mob: +91 9999999222</p>
            <p>example@shopfic.com</p>
          </div>
        </div>
        <div className="information">
          <h3>Information</h3>
          <Link to={"/aboutus"}>About Us</Link>
          <Link to={"/products"}>Products</Link>
          <Link to={"/blogs"}>Blogs</Link>
          <Link to={"/testimonials"}>Testimonials</Link>
          <Link to={"/events"}></Link>
        </div>
        <div className="helpfulLinks">
          <h3>Helpful Links</h3>
          <Link to={"/services"}>Services</Link>
          <Link to={"/supports"}>Supports</Link>
          <Link to={"/termscondition"}>Terms & Condition</Link>
          <Link to={"/privacypolicy"}>Privacy Policy</Link>
          <Link to={"/sitemap"}>Sitemap</Link>
        </div>
        <div className="subscribe">
          <h3>Subscribe More Info</h3>
          <form>
            <div>
              <div>
                <MdMarkEmailRead />
              </div>
              <input type="text" placeholder="Enter your email" />
            </div>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
      <div className="section2">
        <div className="socialMedias">
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebookSquare />
          </a>
          <a href="#">
            <IoLogoLinkedin />
          </a>
          <a href="#">
            <SiLeetcode />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
          <a href="#">
            <FaSquareTwitter />
          </a>
          <a href="#">
            <FaSquareGithub />
          </a>
        </div>
        <p>© 2023 All Rights Reversed</p>
      </div>
    </div>
  );
};

export default Footer;
