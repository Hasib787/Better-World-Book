import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {
    const {bookId} = useParams();
    const [product, setProduct] = useState([]) 

    useEffect(()=>{
        fetch('https://ancient-sea-74243.herokuapp.com/bookitem/'+bookId)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[bookId])

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
            <div><Button className="float-right">Checkout</Button></div>
            </div>
        </div>
    );
};

export default Checkout;