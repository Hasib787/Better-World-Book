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
            <table>
                <tbody>
                    <tr>
                        <td>{bookName}</td>
                        <td>{authorName}</td>
                        <td>$ {addPrice}</td>
                        <td id="deleteIcon"><a onClick={() => handleDeleteItem(_id)}><img src={deleteIcon} alt="" /></a></td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default ManageBooks;