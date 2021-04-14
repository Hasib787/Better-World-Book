import React, { useState, useEffect, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {
    const {bookId} = useParams();
    const [product, setProduct] = useState([]) 
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://ancient-sea-74243.herokuapp.com/bookitem/'+bookId)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[bookId])

    const handleOrder = () => {
        // ...selectedDate
        const newBookings = {...loggedInUser, ...product};
        fetch('http://localhost:5000/addOrder',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
     }

    return (
        <div className="container">
            <Header></Header>
           <div className="checkout">
                <h2>Checkout</h2>    
            <div className="checkoutCard">
            <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Description</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{product.bookName}</td>
                            <td>1</td>
                            <td>${product.addPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div><Link to={"/orders"}><Button onClick={handleOrder} className="float-right">Checkout</Button></Link></div>
            </div>
        </div>
    );
};

export default Checkout;