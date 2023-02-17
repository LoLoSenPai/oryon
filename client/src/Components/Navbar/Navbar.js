import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-top">
            <Link to="/">Home</Link>
            {/* <Link to="/produits">Shop</Link> */}
            <Link to="/collections">Collections</Link>
            <Link to="/contact">About Us</Link>
        </nav>
    )
}
