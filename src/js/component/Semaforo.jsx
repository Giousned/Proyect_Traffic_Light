import React from "react";
import { useEffect, useState } from "react";

import "../../styles/semaforo.css";

const Semaforo = (props) => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (props.extra === true){
      for(let i=0; i<13; i++){
        setTimeout(() => {
          if (i === 0 || i === 4 || i === 8) setColor("red");
          else if (i === 1 || i === 5 || i === 9) setColor("yellow");
          else if (i === 2 || i === 6 || i === 10) setColor("green");
          else if (i === 3 || i === 7 || i === 11) setColor("purple");
          else if (i === 12) setColor("");
          }, 1300*i);}
    }
    else for(let i=0; i<10; i++){
      setTimeout(() => {
        if (i === 0 || i === 3 || i === 6) setColor("red");
        else if (i === 1 || i === 4 || i === 7) setColor("yellow");
        else if (i === 2 || i === 5 || i === 8) setColor("green");
        else if (i === 9) setColor("");
        }, 1300 * i);}
  },[props.contador]);

  // {(props.contador) ? changeColor() : null}

  useEffect(()=>{setColor("");},[props.apagar]);

  return (
    <div className="container">
      <div id="palito" className="bg-black mx-auto">
      </div>
      <div id="base" className="bg-black mx-auto">
        <div onClick={() => {setColor("red");}} className={"trafficLight lightRed" + ((color === "red") ? " glow" : "")}></div>
        <div onClick={() => {setColor("yellow");}} className={"trafficLight lightYellow" + ((color === "yellow") ? " glow" : "")}></div>
        <div onClick={() => {setColor("green");}} className={"trafficLight lightGreen" + ((color === "green") ? " glow" : "")}></div>
        {(props.extra) ? <div onClick={() => {setColor("purple");}} className={"trafficLight lightPurple" + ((color === "purple") ? " glow" : "")}></div> : null}
      </div>
    </div>
  );
};

export default Semaforo;

// function changeColor () {
//   if (props.extra === true){
//     for(let i=0; i<13; i++){
//       setTimeout(() => {
//         if (i === 0 || i === 4 || i === 8) setColor("red");
//         else if (i === 1 || i === 5 || i === 9) setColor("yellow");
//         else if (i === 2 || i === 6 || i === 10) setColor("green");
//         else if (i === 3 || i === 7 || i === 11) setColor("purple");
//         else if (i === 12) setColor("");
//         }, 3000*i);}
//   }
//   else for(let i=0; i<10; i++){
//     setTimeout(() => {
//       if (i === 0 || i === 3 || i === 6) setColor("red");
//       else if (i === 1 || i === 4 || i === 7) setColor("yellow");
//       else if (i === 2 || i === 5 || i === 8) setColor("green");
//       else if (i === 9) setColor("");
//       }, 3000 * i);}
// }

// {(props.contador) ? changeColor() : null}