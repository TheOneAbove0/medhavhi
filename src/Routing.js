import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from "./Components/Authentication/Login";
import Signup from "./Components/Authentication/Signup";
import Main from "./Components/Home/Main";

export default function Routing() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  </BrowserRouter>
  )
}
