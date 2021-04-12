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

            <div className=" navbar-collapse justify-content-center">
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <p>{bookName}</p>
                    </li>
                    <li className="nav-item">
                        <p>{authorName}</p>
                    </li>
                    <li className="nav-item">
                        <p>$ {addPrice}</p>
                    </li>
                    <li className="nav-item">
                        <p id="deleteIcon"><a onClick={() => handleDeleteItem(_id)}><img src={deleteIcon} alt="" /></a> </p>
                    </li>
                </ul>
            </div>

           
        </div>
    );
};

export default ManageBooks;