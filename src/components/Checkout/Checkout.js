import React from 'react';
import Header from '../Header/Header'

const Checkout = () => {
    
    return (
        <div>
            <Header></Header>
            <h1>Checkout</h1>
            <div>
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

export default Checkout;