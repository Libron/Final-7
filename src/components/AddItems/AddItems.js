import React from 'react';
import './AddItems.css';

const MENU = [
    {name: 'Hamburger', type: 'food', cost: 50},
    {name: 'Cheeseburger', type: 'food', cost: 50},
    {name: 'Fries', type: 'food', cost: 50},
    {name: 'Coffee', type: 'drink', cost: 50},
    {name: 'Tea', type: 'drink', cost: 50},
    {name: 'Cola', type: 'drink', cost: 50}
];

const AddItems = () => {
    return (
        <React.Fragment>
            {MENU.map((item, index) => {
              return (
                  <div className={"item " + item.type} key={index}>
                      <h4>{item.name}</h4>
                      <p>Price: {item.cost} KGS</p>
                  </div>
              );
            })}
        </React.Fragment>
    );
};

export default AddItems;