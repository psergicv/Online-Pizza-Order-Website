import React, {useState} from "react";
import '../App.css';


const Sort = () => {
    const [open, setOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState(0);
    const sortOptions = [
      {name: 'Popular', order: 'DESC'},
      {name: 'Price', order: 'ASC'},
      {name: 'Price', order: 'DESC'},
      {name: 'A-Z', order: 'DESC'},
      {name: 'Z-A', order: 'ASC'}
    ];

    const handleSortClick = (index) => {
      setSelectedSort(index);
      setOpen(false);
    }

    const toggleDropdown = () => {
      setOpen(!open);
    };

    return (
        <div className="sort">
          <div className="sort__label" onClick={toggleDropdown}>
            <b>Sort by:</b>
            <span>{`${sortOptions[selectedSort].name} (${sortOptions[selectedSort].order})`}</span>
          </div>
          {open && (
            <div className="sort__popup">
            <ul>
              {sortOptions.map((option, index) => (
                <li 
                className={selectedSort === index ? 'active' : ''}
                key={index}
                onClick={() => handleSortClick(index)}
                >
                {`${option.name} (${option.order})`}
              </li>
              ))}
            </ul>
          </div>
          )}
        </div>
    );
};


export default Sort;