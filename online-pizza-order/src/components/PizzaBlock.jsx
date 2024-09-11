import React, { useState } from "react";
import '../App.css';

const PizzaBlock = (pizza_details) => {
  const [pizzaCounter, setPizzaCounter] = useState(0);

  const onAddPizzaButtonClick = () => {
    setPizzaCounter(pizzaCounter + 1);
  }

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{pizza_details.title}</h4>
      <div className="pizza-block__selector">
        <ul>
          <li className="active">Thin Dough</li>
          <li>Regular Dough</li>
        </ul>
        <ul>
          <li className="active">26 cm</li>
          <li>30 cm</li>
          <li>40 cm</li>
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">from ${pizza_details.price}</div>
        <button onClick={onAddPizzaButtonClick} className="button button--outline button--add">
          <span>Add</span>
          <i>{pizzaCounter}</i>
        </button>
      </div>
    </div>
  );
};

export default PizzaBlock;
