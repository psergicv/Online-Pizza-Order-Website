import React from "react";


const Sort = () => {
    return (
        <div class="sort">
              <div class="sort__label">
                <b>Sort by:</b>
                <span>popular</span>
              </div>
              <div class="sort__popup">
                <ul>
                  <li class="active">popular</li>
                  <li>price</li>
                  <li>A to Z</li>
                </ul>
              </div>
            </div>
    )
};


export default Sort;