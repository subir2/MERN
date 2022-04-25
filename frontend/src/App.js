
import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route,Switch,useParams} from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";

import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
//import Hello from './component/Hello.js';





function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
  
  }, []);

  return (
    <Router>
      
    <Header/>
    

      
        <Switch>

            <Route exact path="/">
            <Home></Home>
            </Route>
     
            <Route exact path="/product/:id" >
            <ProductDetails></ProductDetails>
            
            </Route>

            <Route exact path="/products" >
              <Products></Products>

            </Route>
            <Route exact path="/search" >
              <Search></Search>

            </Route>

            <Route path="/products/:keyword">
            <Products></Products>
            </Route>

            </Switch>
      <Footer/>
     
  
    </Router>
  );
}

export default App;
