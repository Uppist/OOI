/** @format */

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import Programme from "./components/Programme/Programme";
import Givengo from "./components/Givengo/Givengo";
import Partners from "./components/Media/Partners/Partners";
import Newsroom from "./components/Media/Newsroom/Newsroom";
import Gallery from "./components/Media/Gallery/Gallery";
import Reports from "./components/Media/Reports/Reports";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/OOI' element={<AboutUs />} />
          {/* <Route path='/about' element={<AboutUs />} /> */}
          <Route path='/programme' element={<Programme />} />
          <Route path='/givengo' element={<Givengo />} />
          <Route path='/partners' element={<Partners />} />
          <Route path='/newsroom' element={<Newsroom />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/reports' element={<Reports />} />
        </Routes>
        {/* <AboutUs /> */}
        {/* <Programme /> */}
        {/* <Givengo /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
