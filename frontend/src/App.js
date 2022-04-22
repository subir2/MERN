
import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js"

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
     
            </Switch>
      <Footer/>
     
  
    </Router>
  );
}

export default App;
