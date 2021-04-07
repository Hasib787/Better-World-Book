import React, { useState, useEffect } from 'react';
import Books from '../Books/Books';

const Home = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data =>setBooks(data))
    }, [])
    return (
        <div className="row">
            {
                books.map(book =><Books book={book}></Books>)
            }
        </div>
    );
};

export default Home;