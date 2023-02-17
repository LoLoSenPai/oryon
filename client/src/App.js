import React, { useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import FloatingCart from './Components/FloatingCart/FloatingCart'
import Home from './Pages/Home/Home'
import Collections from './Pages/Collections/Collections'
import Contact from './Pages/Contact/Contact'
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart'
import Products from './Pages/Products/Products'
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase'
import NHProductShowcase from './Pages/Partners/NeoHunters/NHProductShowcase/NHProductShowcase'
import NHProducts from './Pages/Partners/NeoHunters/NHProducts/NHProducts'
import DDProductShowcase from './Pages/Partners/DegenDummies/DDProductShowcase/DDProductShowcase'
import DDProducts from './Pages/Partners/DegenDummies/DDProducts/DDProducts'
import FFFProductShowcase from './Pages/Partners/FamousFoxFederation/FFFProductShowcase/FFFProductShowcase'
import FFFProducts from './Pages/Partners/FamousFoxFederation/FFFProducts/FFFProducts'
import RGProductShowcase from './Pages/Partners/RetroGoons/RGProductShowcase/RGProductShowcase'
import RGProducts from './Pages/Partners/RetroGoons/RGProducts/RGProducts'
require('./App.css');

function App() {

  // const [msg, setMsg] = useState('')

  // const handleClick = async () => {
  //   const data = await window.fetch('/api/youtube')
  //   const json = await data.json()
  //   const msg = json.msg

  //   setMsg(msg)
  
  return (
      <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            {/* <button onClick={handleClick}>Say Hi !</button>
            <p>{msg}</p> */}
            <FloatingCart />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/produits" component={Products} />
                <Route exact path="/produits/:id" component={ProductShowcase} />
                <Route exact path="/collections" component={Collections} />
                <Route exact path="/collections/neo_hunters" component={NHProducts} />
                <Route exact path="/collections/neo_hunters/:id" component={NHProductShowcase} />
                <Route exact path="/collections/degen_dummies" component={DDProducts} />
                <Route exact path="/collections/degen_dummies/:id" component={DDProductShowcase} />
                <Route exact path="/collections/famous_fox_federation" component={FFFProducts} />
                <Route exact path="/collections/famous_fox_federation/:id" component={FFFProductShowcase} />
                <Route exact path="/collections/retro_goons" component={RGProducts} />
                <Route exact path="/collections/retro_goons/:id" component={RGProductShowcase} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/shoppingCart" component={ShoppingCart} />
            </Switch>
            <Footer />
        </Router>
  );
}

export default App;
