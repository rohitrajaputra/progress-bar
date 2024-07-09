import React, { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";
import { MAX, MIN } from "./constants";

function App() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => Math.min(MAX, Math.max(val + 1, MIN)));
    }, 100);
  }, []);

  return (
    <div className="app">
      <h1>Progress Bar</h1>
      <ProgressBar
        value={value}
        onComplete={() => {
          setSuccess(true);
        }}
      />
      <h2>{success ? "Success" : "Loading ..."}</h2>
    </div>
  );
}

export default App;
