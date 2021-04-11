import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import axios from 'axios';
import Admin from '../Admin/Admin';
import './AddBook.css';
import { useForm } from 'react-hook-form';

const AddBook = () => {
    const { register, handleSubmit } = useForm()

    const [imageUrl, setImageUrl] = useState(null);

    const onSubmit = data => {
        console.log(data);
        const eventData = {
            bookName: data.bookName,
            authorName: data.authorName,
            addPrice: data.addPrice,
            imageUrl: imageUrl
        }
        console.log(eventData);
        const url = `http://localhost:5000/addBooks`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
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
            <Admin></Admin>
            <div className="addbooks">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-label" >Book Name</Form.Label>
                            <Form.Control name="bookName"  {...register("bookName")} type="text" placeholder="Book Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-label">Author Name</Form.Label>
                            <Form.Control name="authorName" {...register("authorName")} type="text" placeholder="Author Name" />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} controlId="text">
                            <Form.Label className="text-label">Add Price</Form.Label>
                            <Form.Control name="addPrice" {...register("addPrice")} type="number" placeholder="Enter Price" />
                        </Form.Group>

                        <Form.Group>
                            <Form.File className="text-label" onChange={handleImageUpload} id="exampleFormControlFile1" label="Add Book Cover Photo" />
                        </Form.Group>
                    </Form.Row>
                    <div id="saveButton">
                        <Button type="submit">Save</Button>
                    </div>
                </Form>
            </div>
           
        </div> 
    );
};

export default AddBook;