import React from "react";
import "./image-display.css";

const ImageDisplay = ({ imageURL }) => {
  return <img className="image-display" src={imageURL} alt="" />;
};

export default ImageDisplay;
