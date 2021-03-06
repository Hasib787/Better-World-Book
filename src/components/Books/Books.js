import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Books.css';
import { Link } from 'react-router-dom';

const Books = (props) => {
    const {_id, bookName, authorName, addPrice,imageUrl} = props.book;
    
    return (
        <div className="col-md-3">
            <Card style={{ margin:'20px', width: '18rem' }}>
                <Card.Img style={{ margin: '15px', height: '250px', width: '90%'}} variant="top"  src={imageUrl} />
                <Card.Body>
                    <Card.Title>{bookName}</Card.Title>
                    <Card.Text>{authorName}</Card.Text>
                    <div className="card-footer bg-transparent book-card-footer d-flex align-items-center justify-content-between ">
                            <h3 id="price" class="fw-bold fs-2">${addPrice}</h3>
                           { props.showAddToCart && 
                           <Link to={"/checkout/"+_id}>
                                 <Button id="buy-btn" onClick={()=>props.handleAddProduct(props.book)}
                                  className="btn fw-bold px-2.5 py-1.5">Buy Now</Button>
                            </Link>}     
                        </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Books;