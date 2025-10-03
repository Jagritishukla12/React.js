import  { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else if (value === "C") {
      setInput("");
    } else if (value === "←") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    "C", "()", "%", "←",
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "+/-", "0", ".", "+",
            "=", 
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            className={btn === "=" ? "equal" : ""}
            onClick={() => handleClick(
              btn === "←" ? "←" : 
              btn === "+/-" ? "-" :
              btn
            )}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;