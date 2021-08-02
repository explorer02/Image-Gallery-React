import "./App.css";
import { fetchData } from "./server";
import { useEffect, useState } from "react";
import Listview from "./container/ListView/Listview";
import CanvasView from "./container/CanvasView/CanvasView";

function App() {
  const [data, setData] = useState(fetchData);
  const [currentIndex, setCurrentIndex] = useState(0);
  let currentDragged = null;
  let currentDropped = null;
  console.log(data);

  const onSubmithandler = ({ title, description }) => {
    const newData = [...data];
    newData[currentIndex].title = title;
    newData[currentIndex].description = description;
    setData(newData);
  };
  //select list item
  const onSelectListItem = (index) => {
    setCurrentIndex(index);
  };
  //add keyboard navigation using arrow keys
  useEffect(() => {
    const keyboardNavigation = (ev) => {
      if (ev.key === "ArrowDown") {
        ev.preventDefault();
        setCurrentIndex((currentIndex + 1) % data.length);
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        setCurrentIndex((currentIndex - 1 + data.length) % data.length);
      }
    };
    window.addEventListener("keydown", keyboardNavigation);
    return () => {
      window.removeEventListener("keydown", keyboardNavigation);
    };
  }, [currentIndex, data.length]);

  const startDragnDrop = (id) => {
    currentDragged = id;
  };
  const finishDragnDrop = (id) => {
    currentDropped = id;
    if (currentDragged !== null && currentDropped !== null) {
      console.log(currentDragged, currentDropped);
      const newData = [...data];
      const [item] = newData.splice(currentDragged, 1);
      newData.splice(currentDropped, 0, item);

      setData(newData);
      setCurrentIndex(currentDropped);
    }
  };

  return (
    <div className="App">
      <Listview
        dataList={data}
        onSelectListItem={onSelectListItem}
        currentIndex={currentIndex}
        onStartDrag={startDragnDrop}
        onStopDrag={finishDragnDrop}
      />
      <CanvasView data={data[currentIndex]} onSubmit={onSubmithandler} />
    </div>
  );
}

export default App;
