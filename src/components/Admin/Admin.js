import React from 'react';
import './Admin.css'
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';

const Admin = () => {
    const handleAddBook = () => {

    }
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '170f5f7b4d8b940b8be493fbd846036d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            console.log(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
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