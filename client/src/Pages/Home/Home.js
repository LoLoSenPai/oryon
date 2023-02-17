import React, { useEffect, useRef } from 'react'
import './Home.css'
import gsap from 'gsap'
import Products from '../../Pages/Products/Products'
import CustomProductsCard from '../../Components/CustomProductsCard/CustomProductsCard'
import imgHomeShop from '../../Images/3D-Logo.png'
import image1 from '../../Images/2713.png'
import image2 from '../../Images/1875.jpeg'
import image3 from '../../Images/retrogoon.png'
import image4 from '../../Images/jikan.png'
import image5 from '../../Images/5215.png';


function Home() {

  setTimeout(() => {
    document.querySelector('.banner-r img').classList.add('show');
  }, 1000);

  const items = useRef(null)

  useEffect(() => {
    items.current = document.querySelectorAll('.item')

    const expand = (item, i) => {
      items.current.forEach((it, ind) => {
        if (i === ind) return
        it.clicked = false
      })
      gsap.to(items.current, {
        width: item.clicked ? '15vw' : '8vw',
        duration: 2,
        ease: 'elastic(1, .6)'
      })
    
      item.clicked = !item.clicked
      gsap.to(item, {
        width: item.clicked ? '42vw' : '15vw',
        duration: 2.5,
        ease: 'elastic(1, .3)'
      })
    }

    items.current.forEach((item, i) => {
      item.clicked = false
      item.addEventListener('click', () => expand(item, i))
    })
  }, [])


  return (
    <div className="global-container">
      <div className="hero-banner">
        <div className="banner-l">
          <h2>Bring your NFTs to life</h2>
          <p>
            Get customized merchandise with your favorite NFT thanks to our all-in-one platform. We take care of everything.
          </p>
          <ul>
            <li>Easy</li>
            <li>Fast</li>
            <li>Best Quality</li>
          </ul>
          <div class="button-l">
            <a href='../Collections'>
              <button class="btn">Start Now</button>
            </a>
          </div>
        </div>
        <div className="banner-r">
          <img className="hero-right" src={imgHomeShop} alt="accueil shop" />
        </div>
      </div>
      <div className="accordeon">
        <div className="group">
          <div className="item" style={{backgroundImage: `url(${image1})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image2})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image3})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image4})`}}></div>
          <div className="item" style={{backgroundImage: `url(${image5})`}}></div>
        </div>
      </div>
      <CustomProductsCard />
      <div className="featured-products">
        <h2>Custom Products</h2>
        <Products />
      </div>
    </div>
  )
}

  
export default Home;