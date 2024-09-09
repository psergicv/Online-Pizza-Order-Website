import React from "react";
import "../App.css";


const SearchBar = () => {
    return (
        <div className="search">
            <input
                className="search__input" 
                type="text" 
                placeholder="Search pizza..."
                />
        </div>
    );
};


export default SearchBar;