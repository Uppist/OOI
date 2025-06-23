/** @format */

import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Tgp from "./components/Programme/TGP/Tgp";
import Hbi from "./components/Programme/HBI/Hbi";
import Tgt from "./components/Programme/TGT/Tgt";
import DD from "./components/Programme/DD/DD";
import Login from "./components/Admin/Login/Login";
import Dashboard from "./components/Admin/Dashboard/Dashboard";

export default function App() {
  const location = useLocation();

  const adminRoute = ["/login", "/dashboard"];

  const isAdminRoute = adminRoute.includes(location.pathname);

  return (
    <>
      {" "}
      <div>
        {!isAdminRoute && <NavBar />}

        <Routes>
          <Route path='/' element={<AboutUs />} />
          {/* <Route path='/about' element={<AboutUs />} /> */}
          <Route path='/programmes' element={<Programme />} />
          {/*Route for different programmes */}
          <Route path='/health-impact-programme' element={<Hip />} />
          <Route path='/october-future-fund' element={<Off />} />
          <Route path='/future-forward-initiative' element={<FFI />} />
          <Route path='/the-gero-programme' element={<Tgp />} />
          <Route path='/haven-bloom-initiative' element={<Hbi />} />
          <Route path='/the-giving-trybe' element={<Tgt />} />
          <Route path='/donation-drive' element={<DD />} />

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

          {/*Route path for Admin Dashboard */}
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        {/* <AboutUs /> */}
        {/* <Programme /> */}
        {/* <Givengo /> */}
        {!isAdminRoute && <Footer />}
      </div>
    </>
  );
}
