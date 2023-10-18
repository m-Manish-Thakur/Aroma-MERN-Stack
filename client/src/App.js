import React, { useContext, useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";  
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserContext from "./Contexts/UserContext";
import Profile from "./Pages/Profile";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens"
import ProductDetails from './Pages/ProductDetails'


const App = () => {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    // Get user info from localStorage
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/mens" element={<Mens/>} />
          <Route path="/products/womens" element={<Womens />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </HashRouter>
    </>
  );
};

export default App;
