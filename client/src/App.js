import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Collections from "./Pages/Collections/Collections";
import Contact from "./Pages/Contact/Contact";
import ShoppingCart from "./Pages/ShoppingCart/ShoppingCart";
import SACProductShowcase from "./Pages/Partners/StonedApeCrew/SACProductShowcase";
import SACProducts from "./Pages/Partners/StonedApeCrew/SACProducts";
import DDProductShowcase from "./Pages/Partners/DegenDummies/DDProductShowcase";
import DDProducts from "./Pages/Partners/DegenDummies/DDProducts";
import FFFProductShowcase from "./Pages/Partners/FamousFoxFederation/FFFProductShowcase";
import FFFProducts from "./Pages/Partners/FamousFoxFederation/FFFProducts";
import VCProductShowcase from "./Pages/Partners/VisagesClub/VCProductShowcase";
import VCProducts from "./Pages/Partners/VisagesClub/VCProducts";
import PrivacyPolicy from "./Pages/Legal/PrivacyPolicy/PrivacyPolicy";
import ShippingPolicy from "./Pages/Legal/ShippingPolicy/ShippingPolicy";
import TermsAndConditions from "./Pages/Legal/TermsAndConditions/TermsAndConditions";
import ScrollToTop from "./Utils/ScrollToTop";
import page404 from "./Utils/page404/page404";

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
              path="/collections/stoned_ape_crew"
              component={SACProducts}
            />
            <Route
              exact
              path="/collections/stoned_ape_crew/:id"
              component={SACProductShowcase}
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
              path="/collections/visages_club"
              component={VCProducts}
            />
            <Route
              exact
              path="/collections/visages_club/:id"
              component={VCProductShowcase}
            />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/shipping-policy" component={ShippingPolicy} />
            <Route exact path="/terms-and-conditions" component={TermsAndConditions} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/shoppingCart" component={ShoppingCart} />
            <Route exact path="*" component={page404} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
