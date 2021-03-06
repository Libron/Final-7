import React, { Component } from 'react';
import {MENU} from "../../components/AddItems/AddItems";
import './Orders.css';

class Orders extends Component {
    render() {
        let orders = [];
        let qtyColor = {color: '#00695c'};
        let totalCost = this.props.totalCost;
        if (this.props.orders.length) {
            orders = this.props.orders.map((item, index) => {
                if (item.qty !== 0) {
                    const menuIndex = MENU.findIndex(x => x.name===item.name);
                    totalCost += item.qty * MENU[menuIndex].cost;
                    if (item.qty < 3) {
                        qtyColor.color = 'red';
                        if (item.qty === 1) {
                            qtyColor = {fontWeight: 'bold', color: 'red'};
                        }
                    }
                    return (
                        <li className="order" key={index}>{item.name} <p> <span className="qty" style={qtyColor}>x{item.qty}</span> {MENU[menuIndex].cost} KGS <button onClick={() => this.props.removeOrder(index)}> </button></p> </li>
                    );
                } else {
                    return null;
                }
            });
        } else {
            orders = 'Order is empty!';
        }

        return (
            <React.Fragment>
                <ol>{orders}</ol>
                <p className="total">Общая стоимость заказа: <b>{totalCost} сом</b></p>
            </React.Fragment>
        );
    }
}

export default Orders;