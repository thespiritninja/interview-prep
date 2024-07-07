import { useEffect, useState } from "react";
enum Result {
  Correct,
  Incorrect,
}
const generateRandomColor = (): string => {
  const colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * colors.length)];
  }
  return color;
};

function GuessColor() {
  const generateColorValues = () => {
    const correctColor = generateRandomColor();
    setColorValue(correctColor);
    setColors(
      [correctColor, generateRandomColor(), generateRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  };
  const handleButton = (hexValue: string) => {
    if (hexValue === colorValue) {
      setResult(Result.Correct);
      setTimeout(() => {
        generateColorValues();
        setResult(undefined);
      }, 500);
    } else {
      setResult(Result.Incorrect);
    }
  };
  const [colorValue, setColorValue] = useState<string>("");
  const [colors, setColors] = useState<string[]>([]);
  const [result, setResult] = useState<Result | undefined>();
  useEffect(() => {
    generateColorValues();
  }, []);
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          margin: "auto",
          backgroundColor: `${colorValue}`,
          width: "350px",
          height: "300px",
        }}
      ></div>
      {colors.map((color, i) => {
        return (
          <button key={i} onClick={() => handleButton(color)}>
            {color}
          </button>
        );
      })}
      {result === Result.Correct && <div>Correct</div>}
      {result === Result.Incorrect && <div>Incorrect</div>}
    </div>
  );
}

export default GuessColor;
