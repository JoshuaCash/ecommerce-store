import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { BsCart4 } from 'react-icons/bs';

import './Navbar.css';
import logo from '../../assets/ys-logo-white.svg'

function Navbar() {
    return (
        // <SearchIcon />
        <div>
            <nav>
                <div className='logo-container'>
                    <img className="logo" src={logo} height='40px' alt="logo"/>
                    <h3 className='logo-name'>Your Store</h3>   
                 </div>
                 <div className='search-container'>
                    <div className='search-bar'></div>
                    <FaSearch className='search-icon icon' size='1.5em' />
                 </div>
                 <div className='account-icons'>
                    <BsCart4 className='cart-icon icon' size='2em' />
                    <VscAccount className='account-icon icon' size='2em'/>
                 </div>
            </nav>
            <div className='page-links-container'>
                <ul>
                    <li><a href="#">Shirts</a></li>
                    <li><a href="#">Pants</a></li>
                    <li><a href="#">Shorts</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Sweaters</a></li>
                    <li><a href="#">Hats</a></li>
                    <li><a href="#">Gloves</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;