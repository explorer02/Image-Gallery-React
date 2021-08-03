import React from "react";
import ListItem from "../../components/ListItem/ListItem";
import "./list-view.css";

const Listview = ({
  dataList,
  onSelectListItem,
  currentIndex,
  onStartDrag,
  onStopDrag,
}) => {
  //find list item which was clicked
  const handleClick = (ev) => {
    const elements = [
      ev.target,
      ev.target?.parentNode,
      ev.target?.parentNode?.parentNode,
    ];
    const item = elements.find((e) => e && e.classList.contains("list-item"));
    if (item) {
      onSelectListItem(item.dataset.id);
    }
  };

  return (
    <div className="list-container" onClick={handleClick}>
      {dataList.map((d, i) => (
        <ListItem
          {...d}
          key={d.id}
          selected={i === currentIndex}
          onStartDrag={onStartDrag}
          onStopDrag={onStopDrag}
        />
      ))}
    </div>
  );
};

export default Listview;
