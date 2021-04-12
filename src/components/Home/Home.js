import React, { useState, useEffect } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';
import './Home.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://ancient-sea-74243.herokuapp.com/books')
        .then(res => res.json())
        .then(data =>setBooks(data))
    }, [])

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productIds = Object.keys(savedCart);
       
        fetch('https://ancient-sea-74243.herokuapp.com/bookitemByIds',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productIds)
        })
        .then(res => res.json())
        .then(data => setCart(data))
    },[]);

    const handleAddProduct = (bookItem) => {
        const toBeAddedId = bookItem._id;
        const sameProduct = cart.find(pd => pd._id === toBeAddedId);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd._id !== toBeAddedId);
            newCart = [...others, sameProduct];
        }else{
            bookItem.quantity = 1;
            newCart =[...cart, bookItem];
        }
        setCart(newCart);
        addToDatabaseCart(bookItem._id, count);
    }
    return (
        <div>
            <Header></Header>
            <div class="search-bar col-md-6 mx-auto">
                <div class="search-box my-5">
                    <input id="search-field" type="text" class="form-control" placeholder="Search Book"/>
                    <button class="btn btn-primary search-btn">Search</button>
                </div>
            </div>
           <div  className="row">

           {
                books.map(book =><Books 
                    _id={book._id}
                    showAddToCart={true}
                    handleAddProduct={handleAddProduct}
                    book={book}></Books>)
            }
           </div>
        </div>
    );
};

export default Home;