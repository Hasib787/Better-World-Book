import React , { useState,useEffect } from 'react';
import AddBook from '../AddBook/AddBook';
import './Admin.css'
import { Col, Row } from 'react-bootstrap';
import gridIcon from '../../icons/grid 1.png';
import editIcon from '../../icons/edit 1.png';
import plusIcon from '../../icons/plus 1.png';
import { Link } from 'react-router-dom';
import ManageBooks from '../ManageBooks/ManageBooks';

const Admin = () => {
    const [bookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data => setBookDetails(data))
    },[])
    return (
        <div className="admin-container">
            <Row>
                <Col id="sidebar" xs={3}>
                    <h2>Book Shop</h2>
                    <br/>
                   <nav>
                   <p><img src={gridIcon} alt="gridIcon"/><a><Link to="/manageBooks">Manage Books</Link></a></p>
                    <br/>
                   <p><img src={plusIcon} alt="Plus icon"/><a> <Link to="/addBook">Add Book</Link></a></p>
                    <br/>
                    <p><img src={editIcon} alt="edit icon"/><a><Link to="/editBook">Edit Book</Link></a></p>
                   </nav>
                </Col>
                    <div id="addBook-title" >
                    <h4>Add book</h4>
                    </div>
                    {
                        bookDetails.map(manageBook =><ManageBooks manageBook={manageBook}></ManageBooks>)
                    }
            </Row>

        </div>
    );
};

export default Admin;