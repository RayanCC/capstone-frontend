import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import Logo from "../../assets/img/logo.png";
import "../Header/header.scss";
import Home from "../../assets/img/home.jpg";
import Shop from "../../assets/img/shop.jpg";
import Gallery from "../../assets/img/gallery.jpg";
import AboutUs from "../../assets/img/about.jpg";
import Contact from "../../assets/img/contact.jpg";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function Header() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="BlueFamilyLogo" className="logo-img" />
        </Link>

        <div className="SearchBar-Container">
          <SearchBar />
        </div>

        {user && (
          <div className="logOutContainer">
            <span className="userNameDisplay">HI! {user.username}</span>
            <div className="shoppingCart-Container">
              <ShoppingCart />
            </div>
            <button className="logoutCTA" onClick={handleClick}>
              Log Out
            </button>
          </div>
        )}

        {!user && (
          <div className="userAuth">
            <div className="userAuthContainer">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          </div>
        )}
      </div>

      <div>
        <nav className="NavBar">
          <Link to="/home" className="navLink">
            <span className="navLinkText">Home</span>
            <img src={Home} alt="Home" className="navLinkImage" />
          </Link>

          <Link to="/shop" className="navLink">
            <span className="navLinkText">Shop</span>
            <img src={Shop} alt="Shop" className="navLinkImage" />
          </Link>

          <Link to="/gallery" className="navLink">
            <span className="navLinkText">Gallery</span>
            <img src={Gallery} alt="Gallery" className="navLinkImage" />
          </Link>

          <Link to="/aboutus" className="navLink">
            <span className="navLinkText">About Us</span>
            <img src={AboutUs} alt="AboutUs" className="navLinkImage" />
          </Link>

          <Link to="/contact" className="navLink">
            <span className="navLinkText">Contact</span>
            <img src={Contact} alt="Contact" className="navLinkImage" />
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
