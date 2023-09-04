import {LOGO_URL} from "../utils/constants";
import {useState} from 'react'
import { Link } from "react-router-dom";
function Header() {
   const [btnName, setBtnName] = useState("Login")
  
  return (
      <header className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL} 
            
          />
        </div>
        <nav className="nav-items">
          <ul>
            <li>
            <Link to = "/">Home</Link>
              
              </li>
            <li>
            <Link to = "/about">About</Link>
              </li>
            <li>
              <Link to = "/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className= "login" 
            onClick= {() => {
             btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
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