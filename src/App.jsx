import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { Routes,Route } from 'react-router-dom';
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Register from "./Components/Register.jsx";

export default function App(){
  return(
 <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Home' element={<Home />}></Route>
      <Route path='/Login' element={<Login />}></Route>
      <Route path='/Register' element={<Register />}></Route>
    </Routes>
  </>
)
}