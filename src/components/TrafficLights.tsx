import { useEffect, useState } from "react";

type Signs = "red" | "yellow" | "green";
const TIME_RED = 3000;
const TIME_YELLOW = 2000;
const TIME_GREEN = 5000;

function TrafficLights() {
  const [signColor, setSignColor] = useState<Signs>("red");
  useEffect(() => {
    if (signColor === "red") {
      setTimeout(() => {
        setSignColor("green");
      }, TIME_RED);
    } else if (signColor === "green") {
      setTimeout(() => {
        setSignColor("yellow");
      }, TIME_GREEN);
    } else {
      setTimeout(() => {
        setSignColor("red");
      }, TIME_YELLOW);
    }
  }, [signColor]);
  return (
    <div className="signs">
      <h3> Traffic Lights </h3>
      <div className={signColor === "red" ? "red" : "noSign"}></div>
      <div className={signColor === "yellow" ? "yellow" : "noSign"}></div>
      <div className={signColor === "green" ? "green" : "noSign"}></div>
    </div>
  );
}

export default TrafficLights;
