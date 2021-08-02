import React, { useEffect, useRef } from "react";
import "./list-item.css";
import { binarySearch } from "./utils";

const ListItem = ({
  imageURL,
  title,
  description,
  id,
  selected,
  onStartDrag,
  onStopDrag,
}) => {
  const classList = ["list-item"];
  if (selected) classList.push("selected");
  const containerRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    binarySearch(contentRef.current, "60px", "100%", description);
    console.log("binary search for", id);
  }, [id, description]);

  useEffect(() => {
    let count = 0;
    const div = containerRef.current;

    const dragStartHandler = (ev) => {
      setTimeout(() => {
        div.style.display = "none";
        onStartDrag(id);
      }, 300);
    };

    const dragEndHandler = (ev) => {
      setTimeout(() => {
        div.style.display = "flex";
      }, 0);
    };
    const dragEnterHandler = (ev) => {
      ev.preventDefault();
      count++;
      div.classList.add("hovered");
    };

    const dragLeaveHandler = (ev) => {
      count--;
      if (count === 0) {
        div.classList.remove("hovered");
      }
    };

    const dragOverHandler = (ev) => ev.preventDefault();

    const dropHandler = (ev) => {
      div.classList.remove("hovered");
      onStopDrag(id);
    };

    div.addEventListener("dragstart", dragStartHandler);
    div.addEventListener("dragend", dragEndHandler);
    div.addEventListener("dragenter", dragEnterHandler);
    div.addEventListener("dragover", dragOverHandler);
    div.addEventListener("dragleave", dragLeaveHandler);
    div.addEventListener("drop", dropHandler);

    return () => {
      div.removeEventListener("dragstart", dragStartHandler);
      div.removeEventListener("dragend", dragEndHandler);
      div.removeEventListener("dragenter", dragEnterHandler);
      div.removeEventListener("dragover", dragOverHandler);
      div.removeEventListener("dragleave", dragLeaveHandler);
      div.removeEventListener("drop", dropHandler);
    };
  }, [id, onStopDrag, onStartDrag]);

  return (
    <div
      className={classList.join(" ")}
      draggable
      data-id={id}
      ref={containerRef}
    >
      <img src={imageURL} alt="" draggable="false" />
      <div className="list-item-content">
        <p>{title}</p>
        <div ref={contentRef}>{description}</div>
      </div>
    </div>
  );
};

export default ListItem;
