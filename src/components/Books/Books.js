import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Books = (props) => {
    const {imageUrl} = props.book;
    return (
        <div className="col-md-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Books;