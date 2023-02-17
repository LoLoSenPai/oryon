import React, { useState, useEffect } from 'react';
import "./FFFProducts.css";
import { Link } from "react-router-dom";
import FFFinventory from "../../../../data/fff-inventory";
import FloorPriceFFF from "../../../../API/FloorPrice/FloorPriceFFF";
import CollectionInfo from "../../../../API/CollectionInfo/CollectionInfo";


export default function FFFProducts() {
  const [floorPrices, setFloorPrices] = useState({});

  useEffect(() => {
    CollectionInfo(['famous_fox_federation', 'degen_dummiess_', 'neo_hunters', 'goonie']).then(prices => {
      setFloorPrices(prices);
    });
  }, []);

  return (
    <div className="global-container">
      <div className="introduction">
        <h2>Famous Fox Federation</h2>
      </div>
      <FloorPriceFFF floorPrice={floorPrices['famous_fox_federation']} />
      <div className="container-products">
        {FFFinventory.map((item) => (
          <Link
            to={{
              pathname: `famous_fox_federation/${item.title.replace(/\s+/g, "").trim()}`,
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
