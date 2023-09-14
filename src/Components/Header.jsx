import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { LOGO_URL } from "../utils/constants";

function Header() {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="flex justify-between items-center shadow-lg ">
      <a href="/" className="flex items-center">
        <img src={LOGO_URL} width={100} />
        <span>
          <b>Ras Food</b>
        </span>
      </a>

      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/" className="font-bold hover:underline px-2 py-1">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="font-bold hover:underline px-2 py-1">
              Help
            </Link>
          </li>
          <li className="px-4">
            <Link to="/cart" className="font-bold hover:underline px-2 py-1">
              Cart-({cartItems.length})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
