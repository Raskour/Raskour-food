import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; // this is a custom hook
import { useSelector } from "react-redux";


function Header() {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

// subscribing to the store using a selector
const cartItems = useSelector((store) => store.cart.items);
 

return (
    <header className="flex justify-between bg-pink-200 shadow-lg ">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <nav className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {" "}
            Online Status
            {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
          <Link to="/cart"> Cart-({cartItems.length})</Link>
           </li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
