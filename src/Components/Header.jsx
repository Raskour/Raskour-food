import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

function Header() {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className=" ">
      <a href="/" className="">
        <img src={LOGO_URL} width={100} />
        <span>
          <b>Ras Food</b>
        </span>
      </a>

      <nav className="">
        <ul className="">
          <li className="">
            <Link to="/" className="">
              Home
            </Link>
          </li>
          <li className="">
            <Link to="/contact" className="">
              Help
            </Link>
          </li>
          <li className="">
            <Link to="/cart" className="">
              Cart-({cartItems.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
