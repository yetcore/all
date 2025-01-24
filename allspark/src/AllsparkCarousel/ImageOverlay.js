import React from "react";
import "./ImageOverlay.css";
import basemap from "../assets/imgs/basemap.png";

import slogan from "../assets/imgs/slogan.png";
function ImageOverlay() {
  return (
    <div className="image-container">
      <img src={basemap} alt="ditu" className="pic1" loading="lazy" />
      <div className="transparent-overlay"></div>
      <img src={slogan} alt="slogan" className=" pic3" loading="lazy" />
    </div>
  );
}

export default ImageOverlay;
