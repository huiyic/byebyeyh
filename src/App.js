import React from "react";
import "./styles.css";

import Navbar from "./Navbar";
import HeroAd from "./HeroAd";
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroAd />
      <div className="content">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}
