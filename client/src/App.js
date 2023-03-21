import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Collections from "./Pages/Collections/Collections";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import NHProductShowcase from "./Pages/Partners/NeoHunters/NHProductShowcase";
import NHProducts from "./Pages/Partners/NeoHunters/NHProducts";
import DDProductShowcase from "./Pages/Partners/DegenDummies/DDProductShowcase";
import DDProducts from "./Pages/Partners/DegenDummies/DDProducts";
import FFFProductShowcase from "./Pages/Partners/FamousFoxFederation/FFFProductShowcase";
import FFFProducts from "./Pages/Partners/FamousFoxFederation/FFFProducts";
import RGProductShowcase from "./Pages/Partners/RetroGoons/RGProductShowcase";
import RGProducts from "./Pages/Partners/RetroGoons/RGProducts";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {

  return (
    <div className="app-container">
      <Router basename={process.env.PUBLIC_URL}>
        <ScrollToTop />
        <Navbar />
        <div className="page-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/collections" component={Collections} />
            <Route
              exact
              path="/collections/neo_hunters"
              component={NHProducts}
            />
            <Route
              exact
              path="/collections/neo_hunters/:id"
              component={NHProductShowcase}
            />
            <Route
              exact
              path="/collections/degen_dummies"
              component={DDProducts}
            />
            <Route
              exact
              path="/collections/degen_dummies/:id"
              component={DDProductShowcase}
            />
            <Route
              exact
              path="/collections/famous_fox_federation"
              component={FFFProducts}
            />
            <Route
              exact
              path="/collections/famous_fox_federation/:id"
              component={FFFProductShowcase}
            />
            <Route
              exact
              path="/collections/retro_goons"
              component={RGProducts}
            />
            <Route
              exact
              path="/collections/retro_goons/:id"
              component={RGProductShowcase}
            />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shoppingCart" component={ShoppingCart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
