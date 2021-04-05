import React from 'react';
import './Admin.css'
import { Button, Col, Container, Row } from 'react-bootstrap';

const Admin = () => {
    const handleAddBook = () => {

    }
    const handleImageUpload = (event) => {
        console.log(event.target.files)
    }
    return (
        <div>
            <Row>
                <Col id="sidebar" xs={3}>
                    <h2>Book Shop</h2>
                </Col>
                <Col xs={9}>
                    <h4>Add book</h4>
                    <Col id="addBook">
                        <Col id="inputField">
                            <p>Book Name</p>
                            <input type="text" placeholder="Enter Name" />
                            <p>Author Name </p>
                            <input type="text" placeholder="Enter Name" />
                            <br />
                            Add Price
                            <input type="text" placeholder="Enter Price" />
                            Add Book Cover Photo
                            <input type="file" name="Uploaded photo" onChange={handleImageUpload} />
                            <Button onClick={handleAddBook}>Save</Button>
                        </Col>
                    </Col>
                </Col>
            </Row>

        </div>
    );

    // <h2>Add book</h2>
    //         <div className="side-bar">

    //         </div>
    //         <div className="addBooks">
    //             <p>Book Name</p>
    //             <input type="text" placeholder="Enter Name"/>
    //             <p>Author Name </p>
    //             <input type="text" placeholder="Enter Name"/>
    //             <br/>
    //             Add Price
    //             <input type="text" placeholder="Enter Price"/>
    //             Add Book Cover Photo
    //             <input type="file" name="Uploaded photo"/>
    //         </div>
};

export default Admin;