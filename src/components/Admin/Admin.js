import React, { useState, useEffect } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import './Admin.css';
import ManageBooks from '../ManageBooks/ManageBooks';

const Admin = () => {
    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBookDetails(data))
    }, [])
    return (
        <div>
            <AdminHeader></AdminHeader>
            {
                bookDetails.map(book =><ManageBooks book={book}></ManageBooks>)
            }

        </div>
    );
};

export default Admin;