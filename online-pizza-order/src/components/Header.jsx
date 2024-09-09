import React from "react";
import Logo from "../assets/images/pizza-logo.png";
import "../App.css";
import SearchBar from "./SearchBar";
import Cart from "./Cart";


const Header = () => {
    return (
        <div className="container">
          <div className="header__logo">
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>best pizza in the world</p>
            </div>
          </div>
          <SearchBar />
          <Cart />
        </div>
    )
}


export default Header;