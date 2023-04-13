import React, { useState, useEffect } from 'react';
import "../../Products/Products.css";
import { Link } from "react-router-dom";
import inventory from "../../../data/sac-inventory.js";
import FloorPrice from "../../../API/FloorPrice/FloorPrice";
import Footer from '../../../Components/Footer/Footer';
// import BackButton from '../../../Components/BackButton/BackButton';

export default function SACProducts() {
  const [floorPrice, setFloorPrice] = useState(null);

  useEffect(() => {
    async function fetchFloorPrice() {
      try {
        const response = await fetch("/api/floorPrices/stoned_ape_crew");
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
        <img src="../../../images/img8.webp" alt="" />
      </div>
      <div className="introduction">
        <div className="collection-logo">
          <img src="../../../images/logo-sac.webp" alt="" />
        </div>
        <div className="seconde-column-introduction">
          <div className="collection-description-header">
            <h2>Stoned Ape Crew</h2>
            <div class="container-icones">
              <a href="http://discord.gg/stonedapecrew" target="_blank" rel="noreferrer"><i className="fab fa-discord"></i></a>
              <a href="https://twitter.com/StonedApeCrew" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://www.stonedapecrew.com/" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i></a>
            </div>
          </div>
          <p className="introduction-description">Stoned Ape Crew, established in 2021, is the top brand in the Web3 cannabis world. We’re a bunch of chill apes who dig digital art, technology, and all things creative. We call Puff Valley our home and the Stoned Ape brand, its story, and our $PUFF token are the building blocks of our ecosystem - in it, our members get to enjoy a hot lineup of exclusive experiences and benefits.</p>
        </div>
        <div className="collection-stats-container">
          <div className="collection-floor-price">
            <FloorPrice floorPrice={floorPrice} />
          </div>
          <div className="collection-supply">
            <p>Supply: 4200</p>
          </div>
        </div>
      </div>
      <div className="container-products">
        {inventory.map((item) => (
          <Link
            to={{
              pathname: `/collections/stoned_ape_crew/${item.title.replace(/\s+/g, "").trim()}`,
            }}
            key={item.id}
          >
            <div className="bloc-card">
              <div className="product-card">
                <div className="visual-aspect">
                  <img
                    className="img-product"
                    src={process.env.PUBLIC_URL + `/images/${item.img}.webp`}
                    alt="products"
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
      <Footer className="footer"/>
    </div>
  );
}
