import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./FFFProductShowcase.css";
import FFFinventory from "../../../../data/fff-inventory";

export default function FFFProductShowcase() {
  const [nbItems, setNbItems] = useState(1);

  const { id } = useParams();

  const productClicked = FFFinventory.findIndex(
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
      ...FFFinventory[productClicked],
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
            `/images/${FFFinventory[productClicked].img}.png`
          }
          alt=""
        />
      </div>
      <div className="product-infos">
        <h2>{FFFinventory[productClicked].title}</h2>
        <p>Prix: {FFFinventory[productClicked].price}€</p>
        <p>{FFFinventory[productClicked].description}</p>
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
