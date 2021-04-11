import React from 'react';
import deleteIcon from '../../icons/delete.png';
import './ManageBooks.css';

const ManageBooks = (props) => {
    const {bookName, authorName, addPrice} = props.book;

    const handleDeleteItem = () =>{
        console.log('delete clicked')
    }
    return (
        <div>     
                 <table>
                 <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{bookName}</td>
                            <td>{authorName}</td>
                            <td>${addPrice}</td>
                            <td id="deleteIcon"><a onClick={handleDeleteItem}><img src={deleteIcon} alt=""/></a></td>
                        </tr>
                        
                    </tbody>
                </table>
        </div>
    );
};

export default ManageBooks;