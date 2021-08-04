import React from "react";
import "./image-display.css";

const ImageDisplay = ({ imageURL }) => {
  return (
    <div className="image-display">
      <img src={imageURL} alt="" />
    </div>
  );
};

export default ImageDisplay;
