import React from "react";
import { useState } from "react";

const Semaforo = () => {
  const [lightColor, setLightColor] = useState("");

  return (
    <div className="granDiv">
      <div className="stick"></div>
      <div className="container">
        <div
          onClick={() => setLightColor("red")}
          className={"redDark " + (lightColor === "red" ? "redLight" : "")}
        ></div>
        <div
          onClick={() => setLightColor("yellow")}
          className={
            "yellowDark " + (lightColor === "yellow" ? "yellowLight" : "")
          }
        ></div>
        <div
          onClick={() => setLightColor("green")}
          className={
            "greenDark " + (lightColor === "green" ? "greenLight" : "")
          }
        ></div>
      </div>
    </div>
  );
};

export default Semaforo;
