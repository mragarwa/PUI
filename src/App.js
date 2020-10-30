import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  useRouteMatch,
  BrowserRouter
} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import Product_page from './components/Product_page';
import Products from './components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      
      <BrowserRouter>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        {/*Register: for all users. This is the page where a new user can register their information
          and be able to get into the app*/}
        <Route path="/cart">
          <Cart />
        </Route>
        {/*Home: for all users. Page after a user logs in, shows the courses user is enrolled in so 
        user can quickly go into each course*/}
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product_page">
          <Product_page />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;