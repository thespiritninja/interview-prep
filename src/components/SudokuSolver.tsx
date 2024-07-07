import { useState } from "react";

const initialiseGrid = () => {
  return [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
};
function SudokuSolver() {
  const [grid, setGrid] = useState<number[][]>(initialiseGrid);
  // setGrid(initialiseGrid);
  const handleCellValue = (
    rowIndex: number,
    columnIndex: number,
    value: number
  ) => {
    const newGrid = [...grid];
    newGrid[rowIndex][columnIndex] = value;
    setGrid(newGrid);
  };
  const handleClearGrid = () => {
    setGrid(initialiseGrid());
  };
  const handleSolveGrid = async () => {
    const params = [];
    for (let row = 0; row < grid.length; row++) {
      let rowParam = `row${row + 1}=`;
      for (let col = 0; col < grid[row].length; col++) {
        const cellVal = grid[row][col];
        rowParam += cellVal === 0 ? "-," : `${cellVal},`;
      }
      params.push(rowParam.slice(0, -1));
    }

    const combined = params.join("&").replace(/,/g, "%2C");
    const url = `https://sudoku-solver20.p.rapidapi.com/SudokuSolver?${combined}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "bbe393c21cmsh95add887e029132p11eaefjsnf7b2159a99e8",
        "x-rapidapi-host": "sudoku-solver20.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div>
      <div className="grid">
        {grid.map((row, rowInd) => (
          <div key={rowInd} className="row">
            {row.map((cell, colInd) => (
              <div key={colInd} className="cell">
                <input
                  className="cellVal"
                  type="text"
                  value={cell}
                  onChange={(e) =>
                    handleCellValue(
                      rowInd,
                      colInd,
                      parseInt(e.target.value) || 0
                    )
                  }
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleSolveGrid}>solve</button>
      <button onClick={handleClearGrid}>clear</button>
    </div>
  );
}

export default SudokuSolver;
