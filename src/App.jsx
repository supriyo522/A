import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const handleClick = (char) => {
    if (char === "Backspace") {
      setText((prev) => prev.slice(0, -1));
    } else {
      setText((prev) => prev + char);
    }
  };

  return (
    <div className="container">
      <h1>Alphabet Buttons</h1>
      <h2>Click on the buttons below to display alphabets</h2>
      
      <div className="output">{text}</div>

      <div className="keyboard">
        {Array.from({ length: 26 }, (_, i) => (
          <button
            key={i}
            className="key"
            onClick={() => handleClick(String.fromCharCode(65 + i))}
          >
            {String.fromCharCode(65 + i)}
          </button>
        ))}
        <button className="key" onClick={() => handleClick("Backspace")}>
          Backspace
        </button>
      </div>
    </div>
  );
}

export default App;
