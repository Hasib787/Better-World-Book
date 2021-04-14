import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Orders.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://ancient-sea-74243.herokuapp.com/orders?email='+ loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <div className="orderIntro">
                <h1>Hi {loggedInUser.name}</h1>
                <h3>You have: {orders.length} Orders</h3>
            </div>
            {
                orders.map(order => <div className="orders"> <div className="ordersCard">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col">Book Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{order.bookName}</td>
                                <td>1</td>
                                <td>${order.addPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>)
            }
        </div>
    );
};

export default Orders;