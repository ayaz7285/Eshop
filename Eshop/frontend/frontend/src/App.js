import './App.css';
import Login from './components/Login';
import Register from './components/Register'
import About from './components/About';
import Products from './components/Products';
import Product from './components/Product';
import Logout from './components/Logout';
import Header from './components/Header'
import Home from './components/Home'
import Profile from './components/Profile'
import Thank from './components/Thank'
import Footer from './components/Footer'
import Cart from './components/Cart'
import Request from './Request';
import AddProduct from './components/AddProduct'
import SellerLogin from './components/SellerLogin';
import SellerProfile from './components/SellerProfile';
import SellerRegister from './components/SellerRegister';
import SellerLogout from './components/SellerLogout';

import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Test/> */}
      {/* <Trial/>  */}
      {/* <Header></Header>
      
      <Register></Register> */}
      {/* <Header></Header>
      {/* <Test></Test> */}
      <Header/>


      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/register" element={<Register/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>
        <Route exact path="/aboutUs" element={<About/>}></Route>
        <Route exact path="/logout" element={<Logout/>}></Route>
        <Route exact path="/thank" element={<Thank/>}></Route>
        <Route exact path="/products" element={<Products/>}></Route>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/addProduct" element={<AddProduct/>}></Route>
        <Route exact path="/sellerLogin" element={<SellerLogin/>}></Route>
        <Route exact path="/sellerRegister" element={<SellerRegister/>}></Route>
        <Route exact path="/sellerProfile" element={<SellerProfile/>}></Route>
        <Route exact path="/sellerLogout" element={<SellerLogout/>}></Route>
        <Route exact path="/product/:name" element={<Product/>}></Route>
      </Routes>


      {/* <Request></Request> */}
      <Footer></Footer> 
      {/* <Home></Home>
      <Footer></Footer> */}
    </div>
  );
}
export default App;
