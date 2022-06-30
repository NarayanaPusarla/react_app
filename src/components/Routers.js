import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Opportunities from "./Opportunities";
import OurWork from "./OurWork";
import ProductAndServices from "./ProductAndServices";

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/products-and-services" element={<ProductAndServices />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
  );
}

export default Routers;
