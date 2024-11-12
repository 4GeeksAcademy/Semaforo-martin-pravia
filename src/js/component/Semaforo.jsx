import React from "react";
import { useState } from "react";

const Semaforo = () => {
  const [lightColor, setLightColor] = useState("");

  const [colores, setColores] = useState(["red", "yellow", "green"]);
  const cambioDeColor = () => {
    const colorRandom = Math.floor(Math.random() * colores.length);
    setLightColor(colores[colorRandom]);
  };

  const agregarPurpura = () => {
    if (!colores.includes("purple")) {
      setColores([...colores, "purple"]);
    }
  };

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
        {colores.includes("purple") && (
          <div
            onClick={() => setLightColor("purple")}
            className={
              "purpleDark " + (lightColor === "purple" ? "purpleLight" : "")
            }
          ></div>
        )}
      </div>
      <button onClick={cambioDeColor} className="buttonOn">
        Encender semáforo
      </button>
      <button onClick={agregarPurpura} className="buttonAdd">
        Agregar Luz Púrpura
      </button>
    </div>
  );
};

export default Semaforo;
