import React, { createContext, useState } from "react";
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
import AddBook from "./components/AddBook/AddBook";
import ManageBooks from "./components/ManageBooks/ManageBooks";
import EditBook from "./components/EditBook/EditBook";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export  const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
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
        <PrivateRoute path="/admin/:bookId">
          <Admin />
        </PrivateRoute>
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="/manageBooks">
          <ManageBooks />
        </Route>
        <Route path="/editBook">
          <EditBook />
        </Route>
        <Route path="/deals">
          <Deals />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  
  </Router>
  </UserContext.Provider>
  );
}

export default App;
