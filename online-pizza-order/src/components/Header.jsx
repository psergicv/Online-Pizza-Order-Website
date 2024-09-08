import React from "react";


const Header = () => {
    return (
        <div class="container">
          <div class="header__logo">
            <img width="38" src="" alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>best pizza in the world</p>
            </div>
          </div>
          <div class="header__cart">
            <a href="" class="button button--cart">
              <span>0 $</span>
              <div class="button__delimiter"></div>
              <span>0</span>
            </a>
          </div>
        </div>
    )
}


export default Header;