import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Books.css';

const Books = (props) => {
    const {imageUrl, name} = props.book;
    return (
        <div className="col-md-3">
            <Card style={{ margin:'20px', width: '18rem' }}>
                <Card.Img style={{ margin: '15px', height: '200px', width: '90%'}} variant="top"  src={imageUrl} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example 
                    </Card.Text>
                    <div className="card-footer bg-transparent book-card-footer d-flex align-items-center justify-content-between ">
                            <h3 class="text-orange-color fw-bold fs-2">$</h3>
                            <Button className="btn fw-bold text-uppercase px-3 py-2">Buy Now</Button>
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Books;