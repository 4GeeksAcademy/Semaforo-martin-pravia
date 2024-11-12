import React from "react";
import { useState } from "react";

const Semaforo = () => {
  const [lightColor, setLightColor] = useState("");
  
  const colores = ["red", "yellow", "green"];
  const cambioDeColor = () => {
    const colorRandom = Math.floor(Math.random() * colores.length);
    setLightColor(colores[colorRandom]);
  };

  const agregarPurpura = () =>{
    if(!colores.includes("purple")){
    colores.push("purple")
    };
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

      </div>
      <button onClick={cambioDeColor} className="buttonOn">
        Encender semáforo
      </button>
    </div>
  );
};

export default Semaforo;
