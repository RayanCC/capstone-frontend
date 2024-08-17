import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import Logo from "../../assets/img/logo.png";
import "../Header/header.scss";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Navlink from "../NavLink/NavLink";

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

        <div className={user ? "logOutContainer" : "userAuth"}>
          {user ? (
            <>
              <span className="userNameDisplay">HI! {user.username}</span>
              <div className="shoppingCart-Container">
                <ShoppingCart />
              </div>
              <button className="logoutCTA" onClick={handleClick}>
                Log Out
              </button>
            </>
          ) : (
            <div className="userAuthContainer">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </div>
      </div>

      <div>
        <Navlink />
      </div>
    </div>
  );
}

export default Header;
