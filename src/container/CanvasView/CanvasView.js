import React from "react";
import DataForm from "../../components/DataForm/DataForm";
import ImageDisplay from "../../components/ImageDisplay/ImageDisplay";
import "./canvas-view.css";

const CanvasView = ({ data, onSubmit }) => {
  return (
    <div className="canvas-container">
      <ImageDisplay imageURL={data.imageURL} />
      <DataForm {...data} onSubmit={onSubmit} />
    </div>
  );
};

export default CanvasView;
