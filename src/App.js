import classes from "./App.module.css";
import Header from "./Components/Header/Header";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Work from "./Components/Work/Work";
import Services from "./Components/Services/Services";
import RealEstate from "./Components/RealEstate/RealEstate";
import Transport from "./Components/Transport/Transport";
import Electronics from "./Components/Electronics/Electronics";
import Fashion from "./Components/Fashion/Fashion";
import Home from "./Components/Home/Home";
import Household from "./Components/Household/Household";


function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className={classes.navLink}>
        <Routes>
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/RealEstate" element={<RealEstate />} />
          <Route path="/Transport" element={<Transport />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Fashion" element={<Fashion />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Household" element={<Household />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
