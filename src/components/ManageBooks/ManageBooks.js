import React from 'react';
import deleteIcon from '../../icons/delete.png';
import './ManageBooks.css';

const ManageBooks = (props) => {
    console.log(props.book.bookName);
    const { _id, bookName, authorName, addPrice } = props.book;

    const handleDeleteItem = id => {
        console.log('delete clicked', _id)
        fetch(`https://ancient-sea-74243.herokuapp.com/deletebook/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                }
            })
    }
    return (
        <div className="manegeBooks">
                <nav className="navber">
                    <ul>
                        <li id="bookName">
                            {bookName}
                        </li>
                        <li id="authorName">
                            {authorName}
                        </li>
                        <li id="price">
                            $ {addPrice}
                        </li>
                        <li id="icon">
                            <a id="deleteIcon" onClick={() => handleDeleteItem(_id)}><img src={deleteIcon} alt="" /></a> 
                        </li>
                    </ul>
                </nav>
        </div>
    );
};

export default ManageBooks;