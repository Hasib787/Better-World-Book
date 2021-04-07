import React, { useState } from 'react';
import './Admin.css'
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import gridIcon from '../../icons/grid 1.png';
import editIcon from '../../icons/edit 1.png';
import plusIcon from '../../icons/plus 1.png';
const Admin = () => {
    const [imageUrl, setImageUrl] = useState('');

    const handleAddBook = (data) => {
        const eventData ={
            imageUrl: imageUrl
        }
        console.log(eventData);
        const url=`http://localhost:5000/addBooks`;
        fetch(url, {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server site response'))
    }
    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '170f5f7b4d8b940b8be493fbd846036d');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url);
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
                    <br/>
                   <nav>
                   <p><img src={gridIcon} alt="gridIcon"/><a href="#">Manage Books</a></p>
                    <br/>
                   <p><img src={plusIcon} alt="Plus icon"/>  <a href="#">Add Book</a></p>
                    <br/>
                    <p><img src={editIcon} alt="edit icon"/><a href="#">Edit Book</a></p>
                   </nav>
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
                            <input type="file" name="image" onChange={handleImageUpload} />
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