import { useEffect, useState } from "react";
const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const passcode = "531818";
function Passcode() {
  const [passcodeInput, setPasscodeInput] = useState("");
  const [status, setStatus] = useState("start");
  useEffect(() => {
    if (passcodeInput.length === 1) {
      setStatus("");
    }
    if (passcodeInput.length === passcode.length) {
      if (passcodeInput === passcode) {
        console.log("CorrectPass");
        setStatus("success");
      } else {
        console.log("IncorrectPass, Try again");
        setStatus("try again!");
      }
      setPasscodeInput("");
    }
  }, [passcodeInput]);
  return (
    <div>
      <div>{status.length == 0 ? passcodeInput : status}</div>
      <div className="passcode">
        {keys.map((key, idx) => (
          <button
            key={idx}
            className={key === 0 ? "zero" : ""}
            onClick={() =>
              setPasscodeInput((prevPasscode: string) => prevPasscode + key)
            }
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Passcode;
