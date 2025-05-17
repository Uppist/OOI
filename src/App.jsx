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
import Contact from "./components/Engage/Contact/Contact";
import Volunteer from "./components/Engage/Volunteer";
import Refer from "./components/Engage/Refer";
import Hip from "./components/Programme/HIP/Hip";
import Off from "./components/Programme/OFF/Off";
import DonateHip from "./components/Donate/DonateHip";
import FFI from "./components/Programme/FFI/FFI";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path='/OOI' element={<AboutUs />} />
          {/* <Route path='/about' element={<AboutUs />} /> */}
          <Route path='/programme' element={<Programme />} />
          {/*Route for different programmes */}
          <Route path='/health-impact-programme' element={<Hip />} />
          <Route path='/october-future-fund' element={<Off />} />
          <Route path='/future-forward-initiative' element={<FFI />} />

          <Route path='/givengo' element={<Givengo />} />

          {/*Route for donation */}
          <Route path='/donate-to-hip' element={<DonateHip />} />
          <Route path='/donate-to-off' element={<DonateHip />} />
          <Route path='/donate-to-ffi' element={<DonateHip />} />
          <Route path='/donate-to-tgp' element={<DonateHip />} />
          <Route path='/donate-to-hbi' element={<DonateHip />} />
          <Route path='/donate-to-tgt' element={<DonateHip />} />

          {/*Route for Media Section */}
          <Route path='/partners' element={<Partners />} />
          <Route path='/newsroom' element={<Newsroom />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/reports' element={<Reports />} />

          {/*Route for Engage section */}
          <Route path='/volunteer' element={<Volunteer />} />
          <Route path='/refer' element={<Refer />} />
          <Route path='/contactus' element={<Contact />} />
        </Routes>
        {/* <AboutUs /> */}
        {/* <Programme /> */}
        {/* <Givengo /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
