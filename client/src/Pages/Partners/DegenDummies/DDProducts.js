import React, { useState, useEffect } from 'react';
import "../../Products/Products.css";
import { Link } from "react-router-dom";
import inventory from "../../../data/dd-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function DDProducts() {
  const [floorPrice, setFloorPrice] = useState(null);


  useEffect(() => {
    async function fetchFloorPrice() {
      try {
        const response = await fetch("/api/floorPrices/degen_dummiess_");
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
      <img src="../../../images/img1.jpg" alt="" />
    </div>
    <div className="introduction">
      <div className="collection-logo">
        <img src="../../../images/dd-logo.jpg" alt="" />
      </div>
      <div className="seconde-column-introduction">
        <div className="collection-description-header">
          <h2>Degen Dummies</h2>
          <div class="container-icones">
              <a href="https://www.discord.gg/CZwjdbQx8m" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://www.twitter.com/degendummies" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://dlab.vercel.app/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
          </div>
        </div>
        <p className="introduction-description">Degen dummies, the main collection to the Dummified labs brand. Providing educational courses to hard topics in a easy or "dummified" way. All powered by $Crash.</p>
      </div>
      <div className="collection-stats-container">
        <div className="collection-floor-price">
          <FloorPrice floorPrice={floorPrice} />
        </div>
        <div className="collection-supply">
          <p>Supply: 3425</p>
        </div>
      </div>
    </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/degen_dummies/${item.title.replace(/\s+/g, "").trim()}`,
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
