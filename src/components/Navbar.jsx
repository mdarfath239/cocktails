import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/images/logo.png" alt="Velvet Pour Logo" className="navbar-logo" />
                <span className="navbar-brand">Velvet Pour</span>
            </div>
            <div className="navbar-right">
                <ul className="navbar-links">
                    <li><a href="#cocktails">Cocktails</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#art">The Art</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
