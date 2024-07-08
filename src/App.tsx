import "./App.css";
import DrawPoints from "./components/DrawPoints";
import FetchMovieData from "./components/FetchMovieData";
import GuessColor from "./components/GuessColor";
import SudokuSolver from "./components/SudokuSolver";
import Tabs from "./utils/Tabs";
import FileXplorer from "./components/FileXplorer";
import Passcode from "./components/Passcode";

function App() {
  const tabs = [
    <GuessColor key="GuessColor" />,
    <FetchMovieData key="FetchMovieData" />,
    <SudokuSolver key="SudokuSolver" />,
    <DrawPoints key="DrawPoints" />,
    <FileXplorer key="FileXplorer" />,
    <Passcode key="Passcode" />,
  ];
  return (
    <div className="App">
      <div className="tabs-container">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;
