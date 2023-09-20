import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../logo/raskour-logo.svg";
import { useSelector } from "react-redux";
import { CartIcon, HeartIcon } from "../commons/icons";

function Header() {
  // subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  const favItems = useSelector((store) => store.fav.items);

  const btnRef = useRef();
  const [expanded, setExpanded] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (expanded) {
      setExpanded(false);
    }
  }, [location]);

  function handleEscape(e) {
    if (e.code === "Escape") {
      setExpanded(false);

      // bring focus back to the menu button
      btnRef.current?.focus({ focusVisible: true });
    }
  }

  function openNav(e) {
    setExpanded(!expanded);
  }

  return (
    <header>
      <div className="header-wrapper">
        <a href="/" className="logo">
          <img src={logo} alt="Logo" width={60} height={60} />
          <span>Raskour Food</span>
        </a>
        <nav id="mainnav" onKeyDown={handleEscape}>
          <button
            ref={btnRef}
            type="button"
            aria-expanded={expanded}
            aria-label="Menu"
            aria-controls="mainnav"
            className="menu-btn"
            onClick={openNav}
          >
            <svg width="24" height="24" aria-hidden="true">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          </button>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
            <li>
              <Link to="/cart">
                <CartIcon /> ({cartItems.length})
              </Link>
            </li>
            <li>
              <Link to="/fav">
                <HeartIcon /> ({favItems.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
