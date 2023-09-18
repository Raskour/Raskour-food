import { Link } from "react-router-dom";
import logo from "../logo/raskour-logo.svg";
import { useSelector } from "react-redux";

function Header() {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  const favItems = useSelector((store) => store.fav.items);

  return (
    <header>
      <div className="header-wrapper">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" width={60} height={60} />
          <span>Raskour Food</span>
        </a>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/cart">Cart-({cartItems.length})</Link>
            </li>
            <Link to="/fav">Fav- ({favItems.length})</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
