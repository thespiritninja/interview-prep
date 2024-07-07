import { MouseEvent, useState } from "react";
type Point = {
  clientX: number;
  clientY: number;
};
const DrawPoints = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [stackedPoints, setStackedPoints] = useState<Point[]>([]);
  const handleMouseClick = (e: MouseEvent) => {
    setPoints((prevPoints) => [
      ...prevPoints,
      { clientX: e.clientX, clientY: e.clientY },
    ]);
  };
  const handleUndoPoints = () => {
    if (points.length > 0) {
      const pointToStack = points.pop();
      setPoints((prevPoints) => [...prevPoints]);
      if (!pointToStack) return;
      setStackedPoints((prevStackedPoints) => [
        ...prevStackedPoints,
        pointToStack,
      ]);
    }
  };
  const handleRedoPoints = () => {
    if (stackedPoints.length > 0) {
      const pointToUndo = stackedPoints.pop();
      setStackedPoints((prevStackedPoints) => [...prevStackedPoints]);
      if (!pointToUndo) return;
      setPoints((prevPoints) => [...prevPoints, pointToUndo]);
    }
  };
  return (
    <div>
      <div onClick={handleMouseClick} className="pointCanvas">
        {points.map(({ clientX, clientY }, index) => (
          <div
            key={index}
            className="point"
            style={{ left: clientX + "px", top: clientY + "px" }}
          ></div>
        ))}
      </div>
      <button
        disabled={points.length > 0 ? false : true}
        onClick={handleUndoPoints}
      >
        Undo
      </button>
      <button
        disabled={stackedPoints.length > 0 ? false : true}
        onClick={handleRedoPoints}
      >
        Redo
      </button>
      <button
        onClick={() => {
          setPoints([]);
          setStackedPoints([]);
        }}
      >
        Clear Canvas
      </button>
    </div>
  );
};

export default DrawPoints;
