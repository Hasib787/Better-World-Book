import React, { useState, useEffect } from 'react';
import Books from '../Books/Books';
import Header from '../Header/Header';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data =>setBooks(data))
    }, [])
    return (
        <div>
            <Header></Header>
           <div  className="row">
           {
                books.map(book =><Books book={book}></Books>)
            }
           </div>
        </div>
    );
};

export default Home;