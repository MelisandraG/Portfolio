import React from "react";
import { Chrono } from "react-chrono";
import data from "../../data"

export default function Background() {
  return (
    <div id="Background">
      <div style={{ width: "100%", height: "95vh" }}>
        <Chrono items={data} mode="VERTICAL_ALTERNATING" />
      </div>
    </div>
  );
}