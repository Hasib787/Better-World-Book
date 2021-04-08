import React from 'react';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {
    
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
                            <td>JavaScript</td>
                            <td>1</td>
                            <td>$223</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>1</td>
                            <td>$223</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>1</td>
                            <td>$223</td>
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