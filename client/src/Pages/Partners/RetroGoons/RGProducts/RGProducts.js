import React, { useState, useEffect } from 'react';
import "./RGProducts.css";
import { Link } from "react-router-dom";
import RGinventory from "../../../../data/rg-inventory";
import FloorPriceRG from "../../../../API/FloorPrice/FloorPriceRG";
import CollectionInfo from "../../../../API/CollectionInfo/CollectionInfo";


export default function RGProducts() {

const [floorPrices, setFloorPrices] = useState({});

useEffect(() => {
  CollectionInfo(['famous_fox_federation', 'degen_dummiess_', 'neo_hunters', 'goonie']).then(prices => {
    setFloorPrices(prices);
  });
}, []);

  return (
    <div className="global-container">
      <div className="introduction">
        <h2>Retro Goons</h2>
      </div>
      <FloorPriceRG floorPrice={floorPrices['goonie']} />
      <div className="container-products">
        {RGinventory.map((item) => (
          <Link
            to={{
              pathname: `retro_goons/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
              <div className="bloc-card">
                  <div className="product-card">
                      <div className="visual-aspect">
                          <img 
                          className="img-product"
                          src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                          alt="produit" />
                      </div>
                      <div className="info">
                          <p>{item.title}</p>
                          <p>Prix : {item.price}€</p>
                      </div>
                  </div>
                  <div className="back-card"></div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
