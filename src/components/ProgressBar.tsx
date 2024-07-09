import React, { useEffect } from "react";
import { ProgressBarProps } from "../types";
import { MAX, MIN } from "../constants";

const ProgressBar = ({ value, onComplete }: ProgressBarProps) => {
  useEffect(() => {
    if (value === MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <div className="progress">
      <span style={{ color: value > 49 ? "white" : "black" }}>
        {value.toFixed()}%
      </span>
      <div
        // style={{ width: `${value}%` }}
        style={{ transform: `scaleX(${value / MAX})`, transformOrigin: "left" }}
        role="progressbar"
        aria-valuemax={MAX}
        aria-valuemin={MIN}
        aria-valuenow={Number(value.toFixed())}
      />
    </div>
  );
};

export default ProgressBar;
