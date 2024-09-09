import React, {useState} from "react";
import '../App.css';


const Categories = () => {

    const [activeCatIndex, setActiveCatIndex] = useState(0);
    const categories = ['All', 'Meat', 'Vegan', 'Grilled', 'Spicy', 'Closed']

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) =>(
                    <li 
                        key={index}
                        className={activeCatIndex === index ? 'active' : ''}
                        onClick={() => setActiveCatIndex(index)}
                        >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Categories;