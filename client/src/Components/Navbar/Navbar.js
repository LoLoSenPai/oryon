import React, { useRef } from "react";
import "./Navbar.css";
import cartIcon from "../FloatingCart/shopping-cart.svg";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import FloatingCart from "../FloatingCart/FloatingCart";
import myNavLogo from "../../images/Logo-SVG-Black.svg";

export default function Navbar() {

  const toggleBtnRef = useRef(null);
  const toggleBtnIconRef = useRef(null);
  const dropDownMenuRef = useRef(null);

  const handleToggleBtnClick = () => {
    dropDownMenuRef.current.classList.toggle("open");

    const isOpen = dropDownMenuRef.current.classList.contains("open");
    toggleBtnIconRef.current.classList = isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars";
  };

  const imgNavUrl = `${myNavLogo}?${new Date().getTime()}`;

  // Cart Icon
  const shoppingCart = useSelector(state => state)

  let totalItems = 0;
  for(const item of shoppingCart.cart){
    totalItems += item.quantity;
  }

  return (
    <header>
      <div className="navbar">
        <div className="logo">
          <Link to="/" className="nav-link">
            <img className='logo-footer' src={imgNavUrl} alt="logo" />
          </Link>
        </div>
        <ul className="links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/collections" className="nav-link">Collections</Link></li>
          <li><Link to="/contact" className="nav-link">About Us</Link></li>
        </ul>
        <div className="floating-cart">
          <FloatingCart />
        </div>
        {/* <a href="/login" className="action_btn">Connect Wallet</a> */}
        <div className="toggle_btn" ref={toggleBtnRef} onClick={handleToggleBtnClick}>
          <i class="fa-solid fa-bars" ref={toggleBtnIconRef}></i>
        </div>
      </div>
      <div className="dropdown_menu" ref={dropDownMenuRef}>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/collections" className="nav-link">Collections</Link></li>
        <li><Link to="/contact" className="nav-link">About Us</Link></li>
        <li><Link to="/shoppingCart" className="nav-link nav-link-cart">
              <div className="img-notif-container img-notif-container-navbar">
                <img className="cart-icon cart-icon-navbar"  src={cartIcon} alt="icône cadi" />
                <span className="notif notif-navbar">{totalItems}</span>
              </div>
            </Link>
        </li>
        {/* <li><a href="/login" className="action_btn">Connect Wallet</a></li> */}
      </div>
    </header>
  );
}