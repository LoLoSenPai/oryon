import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../Products/Products.css";
import inventory from "../../../data/rg-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function RGProducts() {
  const [floorPrice, setFloorPrice] = useState(null);

  useEffect(() => {
    async function fetchFloorPrice() {
      try {
        const response = await fetch("/api/floorPrices/goonie");
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
      <img src="../../../images/img4.jpg" alt="" />
    </div>
    <div className="introduction">
      <div className="collection-logo">
        <img src="../../../images/rg-logo.jpg" alt="" />
      </div>
      <div className="seconde-column-introduction">
        <div className="collection-description-header">
          <h2>RetroGoons</h2>
          <div class="container-icones">
            <a href="https://www.discord.gg/phygitals" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
            <a href="https://www.twitter.com/retrogoons" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.retrogoons.xyz/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
          </div>
        </div>
      <p className="introduction-description">Brought to you by Phygitals Inc, RetroGoons is a revolutionary phygital collection. Stake your goon to earn points to spend in our market. With limited edition drops based on designer clothing, streetwear brands and other web 3 projects, you can buy physical items for yourself and digital items for your goon, experiencing the best of both worlds.</p>
      </div>
      <div className="collection-stats-container">
        <div className="collection-floor-price">
          <FloorPrice floorPrice={floorPrice} />
        </div>
        <div className="collection-supply">
          <p>Supply: 7799</p>
        </div>
      </div>
    </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/retro_goons/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${item.img}.png`}
                    alt="produit"
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
      <Footer />
    </div>
  );
}
