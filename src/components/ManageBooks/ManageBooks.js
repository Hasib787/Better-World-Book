import React from 'react';
import deleteIcon from '../../icons/delete.png';
import './ManageBooks.css';

const ManageBooks = (props) => {
    console.log(props.book);
    const { bookName, authorName, addPrice } = props.book;

    const handleDeleteItem = () => {
        console.log('delete clicked')
    }
    return (
        <div className="manegeBooks">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{bookName}</td>
                        <td>{authorName}</td>
                        <td>$ {addPrice}</td>
                        <td id="deleteIcon"><a onClick={handleDeleteItem}><img src={deleteIcon} alt="" /></a></td>
                    </tr>
                </tbody>
            </table>   
        </div>
    );
};

export default ManageBooks;