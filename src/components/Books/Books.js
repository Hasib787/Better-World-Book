import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Books = (props) => {
    const {imageUrl} = props.book;
    return (
        <div className="col-md-3">
            <Card style={{ margin:'20px', width: '18rem' }}>
                <Card.Img style={{ margin: '15px', height: '200px', width: '90%'}} variant="top"  src={imageUrl} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example 
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Books;