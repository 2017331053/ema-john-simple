import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className= "header">
            {/* <h1>This is Header</h1> */}
            <img src ={logo} ></img>
                <nav>
                    <a href="/shop">shop</a>    
                    <a href="/review">Order Revie</a>
                    <a href="/Manage">Manage Inventory</a>
                </nav>
        </div>
    );
};

export default Header;