import { useState } from "react";
import "./App.css";
import DrawPoints from "./components/DrawPoints";
import FetchMovieData from "./components/FetchMovieData";
import GuessColor from "./components/GuessColor";
import SudokuSolver from "./components/SudokuSolver";
import Tabs from "./utils/Tabs";

function App() {
  const [grid, setGrid] = useState<number[][]>([[]]);
  const tabs = [
    <GuessColor key="GuessColor" />,
    <FetchMovieData key="FetchMovieData" />,
    <SudokuSolver key="SudokuSolver" />,
    <DrawPoints key="DrawPoints" />,
  ];
  return (
    <div className="App">
      <div className="tabs-container">
        <Tabs tabs={tabs} />
      </div>
      <div className="memoryGame"></div>
    </div>
  );
}

export default App;
