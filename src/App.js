import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Deals from "./components/Deals/Deals";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router> 

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/deals">
          <Deals />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  
  </Router>
  );
}

export default App;