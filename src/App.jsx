import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleClick = (char) => {
    setText((prev) => prev + char);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div className="app">
      <h1>Alphabets App</h1>
      <div className="output">{text}</div>
      <div className="keyboard">
        {alphabets.map((char) => (
          <button
            key={char}
            className="key"
            onClick={() => handleClick(char)}
          >
            {char}
          </button>
        ))}
        <button className="key" onClick={handleBackspace}>
          Backspace
        </button>
      </div>
    </div>
  );
}

export default App;
