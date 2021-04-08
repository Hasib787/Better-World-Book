import React from 'react';
import Admin from '../Admin/Admin';
import './ManageBooks.css';

const ManageBooks = (props) => {
    // const{name} = props.manageBook;
    return (
        <div>
            
        <Admin></Admin>
            <div className=" manageBookContainer">
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
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>sdf</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageBooks;