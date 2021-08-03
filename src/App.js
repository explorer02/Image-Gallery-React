import "./App.css";
import { fetchData } from "./server";
import { useCallback, useEffect, useRef, useState } from "react";
import Listview from "./container/ListView/Listview";
import CanvasView from "./container/CanvasView/CanvasView";

//find index of element in array
function getIndex(data, id) {
  return data.findIndex((e) => e.id === id);
}

function App() {
  const [data, setData] = useState(fetchData);
  const [currentIndex, setCurrentIndex] = useState(0); //current selected item
  let currentDragged = useRef(); //current item dragged
  let currentDropped = useRef(); //current item on which dragged item is dropped

  //update data from form
  const handleSubmit = useCallback(
    ({ title, description }) => {
      const newData = [...data];
      newData[currentIndex].title = title;
      newData[currentIndex].description = description;
      setData(newData);
    },
    [currentIndex, data]
  );

  //select list item
  const handleSelectListItem = (id) => {
    setCurrentIndex(getIndex(data, id));
  };
  //keyboard navigation
  useEffect(() => {
    //add keyboard navigation using arrow keys
    const keyboardNavigation = (ev) => {
      if (ev.key === "ArrowDown") {
        ev.preventDefault();
        setCurrentIndex((c) => (c + 1) % data.length);
      } else if (ev.key === "ArrowUp") {
        ev.preventDefault();
        setCurrentIndex((c) => (c - 1 + data.length) % data.length);
      }
    };
    window.addEventListener("keydown", keyboardNavigation);
    return () => {
      //remove listener on cleanup
      window.removeEventListener("keydown", keyboardNavigation);
    };
  }, [data.length]);

  //start drag and drop by setting dragged box
  const startDragnDrop = useCallback(
    (id) => {
      currentDragged.current = getIndex(data, id);
    },
    [data]
  );

  //finish drag and drop by reordering data
  const finishDragnDrop = useCallback(
    (id) => {
      currentDropped.current = getIndex(data, id);
      if (currentDragged.current !== null && currentDropped.current !== null) {
        const newData = [...data];
        const [item] = newData.splice(currentDragged.current, 1);
        newData.splice(currentDropped.current, 0, item);
        setData(newData);
        setCurrentIndex(currentDropped.current);
        currentDropped.current = null;
        currentDragged.current = null;
      }
    },
    [data]
  );

  return (
    <div className="App">
      <Listview
        dataList={data}
        onSelectListItem={handleSelectListItem}
        currentIndex={currentIndex}
        onStartDrag={startDragnDrop}
        onStopDrag={finishDragnDrop}
      />
      <CanvasView data={data[currentIndex]} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
