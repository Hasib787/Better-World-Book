import React from 'react';
import { Col, Row } from 'react-bootstrap';
import gridIcon from '../../icons/grid 1.png';
import editIcon from '../../icons/edit 1.png';
import plusIcon from '../../icons/plus 1.png';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

const AdminHeader = () => {
    return (
        <div className="admin-container">
            <Row>
                <Col id="sidebar" xs={3}>
                    <h2>BETTER WORLD BOOKS</h2>
                    <br />
                    <nav>
                        <p><img src={gridIcon} alt="gridIcon" /><a><Link to="/admin">Manage Books</Link></a></p>
                        <br />
                        <p><img src={plusIcon} alt="Plus icon" /><a> <Link to="/addBook">Add Book</Link></a></p>
                        <br />
                        <p><img src={editIcon} alt="edit icon" /><a><Link to="/editBook">Edit Book</Link></a></p>
                    </nav>
                </Col>
                <div id="addBook-title" >
                    <h4>Add book</h4>
                </div>
            </Row>
        </div>
    );
};

export default AdminHeader;