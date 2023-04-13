import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../../Products/Products.css";
import inventory from "../../../data/vc-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function VCProducts() {
  const [floorPrice, setFloorPrice] = useState(null);

  useEffect(() => {
    async function fetchFloorPrice() {
      try {
        const response = await fetch("/api/floorPrices/goonie"); // A MODIFIER POUR VISAGES CLUB
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
      <img src="../../../images/img7.webp" alt="" />
    </div>
    <div className="introduction">
      <div className="collection-logo">
        <img src="../../../images/logo-vc.webp" alt="" />
      </div>
      <div className="seconde-column-introduction">
        <div className="collection-description-header">
          <h2>Visages Club</h2>
          <div class="container-icones">
            <a href="https://discord.gg/visagesclub" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
            <a href="https://twitter.com/visagesclub" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://exchange.art/0xddddd/nfts" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
          </div>
        </div>
      <p className="introduction-description">013 origin 1/1 art series by @0xdailymint</p>
      </div>
      <div className="collection-stats-container">
        <div className="collection-floor-price">
          <FloorPrice floorPrice={floorPrice} />
        </div>
        <div className="collection-supply">
          <p>Supply: TBA</p>
        </div>
      </div>
    </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/visages_club/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${item.img}.webp`}
                    alt="produit"
                  />
                </div>
                <div className="info">
                  <p>{item.title}</p>
                  <p>Prix : {item.price} $</p>
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
