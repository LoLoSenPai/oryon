import React from 'react';
import {Link} from 'react-router-dom'
import './CustomCard.css';
import LogoNH from '../../Images/logo-nh.png'
import ImgNH from '../../Images/157.png'
import LogoDD from '../../Images/logo-dd.png'
import ImgDD from '../../Images/18751.png'
import LogoFFF from '../../Images/fff-logo1.png'
import ImgFFF from '../../Images/27131.png'
import LogoRG from '../../Images/rg-logo1.png'
import ImgRG from '../../Images/retrogoon1.png'


function CustomCard() {
  return (
    <div className="container">
      <div className="intro">
        <h1>Collections</h1>
        <p>This is all our partnerships</p>
      </div>
      <div className="collection-container">
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="circle circle-nh" style={{'--clr': '#f40103'}}>
                  <img src={LogoNH} className="logo" alt='logo_neo-hunters'/>
              </div>
              <div className="content content-nh">
                  <h2>Neo Hunters</h2>
                  <p>Neo Hunter is a incredible and strong project on Solana Ecosystem
                  </p>
                  <Link to="/collections/neo_hunters" className='collection-link'>Explore More</Link>
              </div>
              <img src={ImgNH} className="product_img" alt='Neo Olympus NFT' />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="circle circle-dd" style={{'--clr': 'yellow'}}>
                  <img src={LogoDD} className="logo" alt='logo_neo-hunters'/>
              </div>
              <div className="content content-dd">
                  <h2>Degen Dummies</h2>
                  <p>Degen Dummies is a incredible and strong project on Solana Ecosystem
                  </p>
                  <Link to="/collections/degen_dummies" className='collection-link'>Explore More</Link>
              </div>
              <img src={ImgDD} className="product_img" alt='Neo Olympus NFT' />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <div className="circle circle-fff" style={{'--clr': 'orange'}}>
                  <img src={LogoFFF} className="logo" alt='logo_neo-hunters'/>
              </div>
              <div className="content content-fff">
                  <h2>Famous Fox Federation</h2>
                  <p>FFF is a incredible and strong project on Solana Ecosystem
                  </p>
                  <Link to="/collections/famous_fox_federation" className='collection-link'>Explore More</Link>
              </div>
              <img src={ImgFFF} className="product_img" alt='Neo Olympus NFT' />
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="circle circle-rg" style={{'--clr': 'white'}}>
                  <img src={LogoRG} className="logo" alt='logo_neo-hunters'/>
              </div>
              <div className="content content-rg">
                <h2>RetroGoons</h2>
                <p>RetroGoons is a incredible and strong project on Solana Ecosystem
                </p>
                <Link to="/collections/retro_goons" className='collection-link'>Explore More</Link>
              </div>
              <img src={ImgRG} className="product_img" alt='Neo Olympus NFT' />
            </div>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default CustomCard;