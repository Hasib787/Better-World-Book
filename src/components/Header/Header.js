import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="header-container">
        {/* Nav Start  */}
        <nav className="container navbar navbar-expand-lg navbar-light">

            <div className="container d-flex justify-content-right">
                <div><h2>BETTER WORLD BOOKS</h2></div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div  className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul id="navName" className="navbar-nav   fw-bold">
                        <li className="nav-item">
                            <p><a><Link to="/home">Home</Link></a></p>
                        </li>
                        <li className="nav-item">
                           <p> <a><Link to="/orders">Orders</Link></a></p>
                        </li>
                        <li className="nav-item">
                           <p> <a href="#admin"><Link to="/admin">Admin</Link></a></p>
                        </li>
                        <li className="nav-item">
                           <p><a><Link to="/deals">Deals</Link></a></p>
                        </li>
                        <li className="nav-item">
                            
                            <Link to="/login"><Button id="btn"  variant="contained" >Login</Button>
                            </Link>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- nav end --> */}
    </div>
    );
};

export default Header;