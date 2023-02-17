import "./DDProducts.css";
import { Link } from "react-router-dom";
import DDinventory from "../../../../data/dd-inventory";
import React, { useState, useEffect } from 'react';
import FloorPriceDD from "../../../../API/FloorPrice/FloorPriceDD";
import CollectionInfo from "../../../../API/CollectionInfo/CollectionInfo";


export default function DDProducts() {
  const [floorPrices, setFloorPrices] = useState({});

  useEffect(() => {
    CollectionInfo(['famous_fox_federation', 'degen_dummiess_', 'neo_hunters', 'goonie']).then(prices => {
      setFloorPrices(prices);
    });
  }, []);

  return (
    <div className="global-container">
      <div className="intro">
        <h2>Degen Dummies</h2>
      </div>
      <FloorPriceDD floorPrice={floorPrices['degen_dummiess_']} />
      <div className="container-products">
        {DDinventory.map((item) => (
          <Link
            to={{
              pathname: `degen_dummies/${item.title.replace(/\s+/g, "").trim()}`,
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
