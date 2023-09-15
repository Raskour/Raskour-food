import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

function Header() {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header>
      <a href="/" className="logo">
        <img src={LOGO_URL} width={100} />
        <span>Raskour Food</span>
      </a>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Help</Link>
          </li>
          <li>
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
