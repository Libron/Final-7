import React, { Component } from 'react';
import './App.css';
import AddItems from "./components/AddItems/AddItems";
import Orders from "./containers/Orders/Orders";

class App extends Component {
    state = {
       orders: [],
        totalCost: 0
    };

    addOrder = name => {
        const orders = this.state.orders;
        const index = orders.findIndex(x => x.name===name);
        if (index === -1) {
            orders.push({name: name, qty: 1});
        } else {
            orders[index].qty++;
        }
        this.setState(orders);
    };

    removeOrder = index => {
        const orders = this.state.orders;

        if ( orders[index].qty > 1) {
            orders[index].qty--;
        } else {
            orders.pop(index);
        }
        this.setState(orders);
    };

  render() {
    return (
      <div className="App">
          <div className="col Orders">
              <Orders
                  orders={this.state.orders}
                  totalCost={this.state.totalCost}
                  removeOrder={index => this.removeOrder(index)}
              />
          </div>
          <div className="col Additems">
              <h1>Menu</h1>
              <AddItems addOrder={name => this.addOrder(name)} />
          </div>
      </div>
    );
  }
}

export default App;
