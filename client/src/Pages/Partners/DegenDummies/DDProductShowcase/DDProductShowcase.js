import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./DDProductShowcase.css";
import DDinventory from "../../../../data/dd-inventory";

export default function DDProductShowcase() {
  const [nbItems, setNbItems] = useState(1);

  const { id } = useParams();

  const productClicked = DDinventory.findIndex(
    (obj) => obj.title.replace(/\s+/g, "").trim() === id
  );

  const updateItems = (e) => {
        setNbItems(Number(e.target.value));
  };

  const addingInfo = useRef();
  let timerInfo;
  let display = true;

  const dispatch = useDispatch()

  const addToCart = e => {
    e.preventDefault()

    const itemAdded = {
      ...DDinventory[productClicked],
      quantity: nbItems
    }

    dispatch({
      type: "ADDITEM",
      payload: itemAdded
    })
    
    addingInfo.current.innerText = "Ajouté au panier"

    if(display){
      display = false;
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display = true;
      }, 500)
    }
  }

  useEffect(() => {
      return () => {
        clearTimeout(timerInfo)
      }
  }, [timerInfo])

  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img
          className="img-showcase"
          src={
            process.env.PUBLIC_URL +
            `/images/${DDinventory[productClicked].img}.png`
          }
          alt=""
        />
      </div>
      <div className="product-infos">
        <h2>{DDinventory[productClicked].title}</h2>
        <p>Prix: {DDinventory[productClicked].price}€</p>
        <p>{DDinventory[productClicked].description}</p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity">Quantité</label>
          <input
            type="number"
            id="quanitity"
            value={nbItems}
            onChange={updateItems}
          />
          <button>Ajouter au panier</button>
          <span 
          ref={addingInfo}
          className="adding-info"></span>
        </form>
      </div>
    </div>
  );
}