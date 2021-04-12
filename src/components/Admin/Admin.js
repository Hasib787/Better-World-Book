import React, { useState, useEffect } from 'react';
import AdminHeader from '../AdminHeader/AdminHeader';
import './Admin.css';
import ManageBooks from '../ManageBooks/ManageBooks';

const Admin = () => {
    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetch('https://ancient-sea-74243.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBookDetails(data))
    }, [])
    console.log(bookDetails)
    return (
        <div>
            <AdminHeader></AdminHeader>
            <table id="table" className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                </table>
            {
                bookDetails.map(book =><ManageBooks book={book}></ManageBooks>)
            }
            

        </div>
    );
};

export default Admin;