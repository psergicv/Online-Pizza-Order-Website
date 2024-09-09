import React from "react";
import "../App.css";


const Cart = () => {
    return (
        <div>
            <div className="header__cart">
                <a href="/" className="button button--cart">
                    <span>$ 0</span>
                    <div className="button__delimiter"></div>
                    <span>0</span>
                </a>
            </div>
        </div>
    );
};


export default Cart;