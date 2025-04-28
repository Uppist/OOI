/** @format */

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <AboutUs />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
