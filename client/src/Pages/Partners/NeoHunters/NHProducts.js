import React, { useState, useEffect } from 'react';
import "../../Products/Products.css";
import { Link } from "react-router-dom";
import inventory from "../../../data/nh-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function NHProducts() {
  const [floorPrice, setFloorPrice] = useState(null);

  useEffect(() => {
    async function fetchFloorPrice() {
      try {
        const response = await fetch("/api/floorPrices/neo_hunters");
        const data = await response.json();
        setFloorPrice(data.floorPrice);
      } catch (error) {
        console.error(error);
      }
    }
    fetchFloorPrice();
  }, []);

  return (
    <div className="global-products-container">
      <div className="collection-banner">
        <img src="../../../images/img3.jpg" alt="" />
      </div>
      <div className="introduction">
        <div className="collection-logo">
          <img src="../../../images/nh-logo.png" alt="" />
        </div>
        <div className="seconde-column-introduction">
          <div className="collection-description-header">
            <h2>Neo Labs</h2>
            <div class="container-icones">
              <a href="https://discord.gg/neohunters" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://twitter.com/neo_hunters" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://neohunters.io/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <p className="introduction-description">The web3 cyberpunk Metaverse. Join the Hunt.</p>
        </div>
        <div className="collection-stats-container">
          <div className="collection-floor-price">
            <FloorPrice floorPrice={floorPrice} />
          </div>
          <div className="collection-supply">
            <p>Supply: 5553</p>
          </div>
        </div>
      </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/neo_hunters/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
                    alt="products"
                  />
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
      <Footer className="footer"/>
    </div>
  );
}
