import React, {useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/orders?email='+loggedInUser.email,{
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
        })
            .then(res => res.json())
            .then(data =>setOrders(data));
    }, [])
    return (
        <div>
            <Header></Header>
            <h1>Hi {loggedInUser.name}</h1>
            <h3>You have: {orders.length} booking</h3>
            {
                orders.map(book => <li id={book._id}> {book.bookName} </li>)
            }
        </div>
    );
};

export default Orders;