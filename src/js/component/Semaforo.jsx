import React from "react";
import { useEffect, useState } from "react";

import "../../styles/semaforo.css";

const Semaforo = (props) => {
  const [color, setColor] = useState("red");
  
  useEffect(() =>{
    for(let i=0; i<10; i++){
      setTimeout(() => {
        if (i === 0 || i === 3 || i === 6) setColor("red");
        else if (i === 1 || i === 4 || i === 7) setColor("yellow");
        else if (i === 2 || i === 5 || i === 8) setColor("green");
        else if (i === 9) setColor("");
        }, 2000*i);}
    },[props.contador]);

    useEffect(()=>{setColor("");},[props.apagar]);

    useEffect(()=>{setColor("");},[props.extra]);

  return (
    <div className="container">
      <div id="palito" className="bg-black mx-auto">
      </div>
      <div id="base" className="bg-black mx-auto">
        <div onClick={() => {setColor("red");}} className={"trafficLight lightRed" + ((color === "red") ? " glow" : "")}></div>
        <div onClick={() => {setColor("yellow");}} className={"trafficLight lightYellow" + ((color === "yellow") ? " glow" : "")}></div>
        <div onClick={() => {setColor("green");}} className={"trafficLight lightGreen" + ((color === "green") ? " glow" : "")}></div>
      </div>
    </div>
  );
};

export default Semaforo;
