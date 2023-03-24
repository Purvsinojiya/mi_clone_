import "./App.css";
import React from "react";
import Prenavbar from "./Prenavbar.js";
import Navbar from "./Navbar.js";
import Slider from "./slider.js";
import Offers from "./offers.js";
import {BrowserRouter as Router,Route} from "react-router-dom";
import data from "./data/data.json";
import Heading from "./heading.js";
import Starproduct from "./Starproduct.js";
import HotAccessoriesMenu from "./HotAccessoriesMenu.js";
import HotAccessories from "./HotAccessories";
function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <Starproduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES" />
      <HotAccessoriesMenu />
      


      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>

      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>

      <Route exact path="/home">
        <HotAccessories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>

      <Route exact path="/lifestyle">
        <HotAccessories
          lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>

      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>
    </Router>
  );
}

export default App;
