import React from 'react';
import './AddItems.css';

export const MENU = [
    {name: 'Hamburger', type: 'food', cost: 80},
    {name: 'Coffee', type: 'drink', cost: 70},
    {name: 'Cheeseburger', type: 'food', cost: 90},
    {name: 'Tea', type: 'drink', cost: 50},
    {name: 'Fries', type: 'food', cost: 45},
    {name: 'Cola', type: 'drink', cost: 40}
];

const AddItems = ({addOrder}) => {
    return (
        <React.Fragment>
            {MENU.map((item, index) => {
              return (
                  <div className={"item " + item.type} key={index} onClick={() => addOrder(item.name)}>
                      <h4>{item.name}</h4>
                      <p>Price: {item.cost} KGS</p>
                  </div>
              );
            })}
        </React.Fragment>
    );
};

export default AddItems;