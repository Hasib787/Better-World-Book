import React, { useState, useEffect } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://ancient-sea-74243.herokuapp.com/books')
        .then(res => res.json())
        .then(data =>setBooks(data))
    }, [])
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
                books.map(book =><Books book={book}></Books>)
            }
           </div>
        </div>
    );
};

export default Home;