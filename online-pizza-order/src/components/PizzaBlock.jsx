import React, { useState } from "react";


const PizzaBlock = (pizza_details) => {

    const [pizzaCounter, setPizzaCounter] = useState(0);

    const onAddPizzaButtonClick = () => {
        setPizzaCounter(pizzaCounter + 1);
    }

    return (
        <div class="pizza-block">
            <img
                class="pizza-block__image"
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                alt="Pizza"
            />
            <h4 class="pizza-block__title">{pizza_details.title}</h4>
            <div class="pizza-block__selector">
                <ul>
                <li class="active">Thin Dough</li>
                <li>Regular Dough</li>
                </ul>
                <ul>
                <li class="active">26 cm</li>
                <li>30 cm</li>
                <li>40 cm</li>
                </ul>
            </div>
            <div class="pizza-block__bottom">
            <div class="pizza-block__price">from ${pizza_details.price}</div>
                <button onClick={onAddPizzaButtonClick} class="button button--outline button--add">
                    <span>Add </span>
                    <i>{pizzaCounter}</i>
                </button>
            </div>
        </div>
    )
};


export default PizzaBlock;