
import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route,Switch,useParams} from "react-router-dom";
import WebFont from "webfontloader";
import React, { useEffect } from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.js";
import { loadUser } from "./actions/userAction";
import ProductDetails from './component/Product/ProductDetails';
import Products from './component/Product/Products';
import Search from './component/Product/Search';
import LoginSignUp from './component/User/LoginSignUp';
import store from "./store";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from 'react-redux';
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import Cart from "./component/Cart/Cart.js";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
//import Hello from './component/Hello.js';





function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
    store.dispatch(loadUser());
  }, []);


  window.addEventListener("contextmenu", (e) => e.preventDefault());
  return (
    <Router>
      
    <Header/>
    
    {isAuthenticated && <UserOptions user={user} />}
      
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


            <ProtectedRoute exact path="/account" component={Profile} />

<ProtectedRoute exact path="/me/update" component={UpdateProfile} />
<ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />


            <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

            <Route path="/products/:keyword">
            <Products></Products>
            </Route>

            <Route path="/password/forgot">
            <ForgotPassword></ForgotPassword>
            </Route>


            <Route exact path="/password/reset/:token" >
            <ResetPassword></ResetPassword>
              </Route>

              <Route exact path="/cart">
              <Cart></Cart>
                </Route>

                <ProtectedRoute exact path="/shipping" component={Shipping} />
                <ProtectedRoute exact path="/success" component={OrderSuccess} />
                <ProtectedRoute exact path="/orders" component={MyOrders} />
                <ProtectedRoute exact path="/order/:id" component={OrderDetails} />
        <ProtectedRoute
         isAdmin={true}
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />

<ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />

<ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        
<ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />

<ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

<ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />

<ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

<ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />
         <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />
       <Route exact path="/contact" component={Contact} />

<Route exact path="/about" component={About} />
<Route
          component={NotFound}
        />

            <Route path="/login">
            <LoginSignUp></LoginSignUp>
            </Route>

            </Switch>
      <Footer/>
     
  
    </Router>
  );
}

export default App;
