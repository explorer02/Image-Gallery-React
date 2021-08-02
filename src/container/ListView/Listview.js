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
  const onClickHandler = (ev) => {
    const elements = [
      ev.target,
      ev.target?.parentNode,
      ev.target?.parentNode?.parentNode,
    ];
    const item = elements.find((e) => e && e.classList.contains("list-item"));
    if (item) {
      const index = parseInt(item.dataset.id);
      if (index !== undefined) onSelectListItem(index);
    }
  };
  return (
    <div className="list-container" onClick={onClickHandler}>
      {dataList.map((d, i) => (
        <ListItem
          {...d}
          key={d.id}
          id={i}
          selected={i === currentIndex}
          onStartDrag={onStartDrag}
          onStopDrag={onStopDrag}
        />
      ))}
    </div>
  );
};

export default Listview;
