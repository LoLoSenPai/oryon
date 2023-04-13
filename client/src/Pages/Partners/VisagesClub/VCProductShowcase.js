import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../../ProductShowcase/ProductShowcase.css";
import VCinventory from "../../../data/vc-inventory";
import Footer from "../../../Components/Footer/Footer";
import BackButton from "../../../Components/BackButton/BackButton";

export default function VCProductShowcase() {
  const [nbItems, setNbItems] = useState(1);

  const { id } = useParams();

  const productClicked = VCinventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );

  const updateItems = (e) => {
    setNbItems(Number(e.target.value));
  };

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();

    const itemAdded = {
      ...VCinventory[productClicked],
      quantity: nbItems
    };

    // Get current cart from localStorage
    let currentCart = JSON.parse(localStorage.getItem("cart"));

    if (!currentCart) {
      currentCart = [];
    }

    // Add the new item to cart
    currentCart.push(itemAdded);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(currentCart));

    // Dispatch the action to update the cart in the Redux store
    dispatch({
      type: "ADDITEM",
      payload: itemAdded
    });

    addingInfo.current.innerText = "Added to cart";

    if (display) {
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 500);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo);
    };
  }, [timerInfo]);

  return (
    <div className="global-product-container">
      <BackButton />
      <div className="showcase">
        <div className="container-img-showcase">
          <img
            className="img-showcase"
            src={
              process.env.PUBLIC_URL +
              `/images/${VCinventory[productClicked].img}.webp`
            }
            alt=""
          />
        </div>
        <div className="product-infos">
          <h2>{VCinventory[productClicked].title}</h2>
          <p>Price: {VCinventory[productClicked].price}$</p>
          <form onSubmit={addToCart}>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              className="qty-label"
              value={nbItems}
              onChange={updateItems}
            />
            <button className="add-to-cart-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span> Add to cart
            </button>
            <span ref={addingInfo} className="adding-info"></span>
          </form>
          <h3>Description:</h3>
          <p>{VCinventory[productClicked].description}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}