import React from "react";

export default function HeroAd(props) {
  // random number generator
  const HERO_ADS = 8;
  const ad = Math.floor(Math.random() * HERO_ADS);
  console.log(ad);
  return (
    <div style={{ marginTop: "60px", marginBottom: "-60px" }}>
      <a href="https://supertanbros.com" target="window">
        <img src={`hero/${ad}.png`} alt="supertanbros" />
      </a>
    </div>
  );
}
