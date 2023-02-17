import React, { useState, useEffect } from 'react';
import "./NHProducts.css";
import { Link } from "react-router-dom";
import NHinventory from "../../../../data/nh-inventory";
import FloorPriceNH from "../../../../API/FloorPrice/FloorPriceNH";
import CollectionInfo from "../../../../API/CollectionInfo/CollectionInfo";


export default function NHProducts() {

  const [floorPrices, setFloorPrices] = useState({});

  useEffect(() => {
    CollectionInfo(['famous_fox_federation', 'degen_dummiess_', 'neo_hunters', 'goonie']).then(prices => {
      setFloorPrices(prices);
    });
  }, []);

  return (
    <div className="global-container">
      <div className="introduction">
        <h2>Neo Hunters</h2>
      </div>
      <FloorPriceNH floorPrice={floorPrices['neo_hunters']} />
      <div className="container-products">
        {NHinventory.map((item) => (
          <Link
            to={{
              pathname: `neo_hunters/${item.title.replace(/\s+/g, "").trim()}`,
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
