import React from "react";
import { useEffect, useState } from "react";

import "../../styles/semaforo.css";

import { RED, YELLOW, GREEN, PURPLE} from "../component/config.jsx"

const Semaforo = (props) => {
  const [color, setColor] = useState(RED);

  let i = 0;

  function changeColor () {
    if (i === 0) setColor(RED);
    else if (i === 1) setColor(YELLOW);
    else if (i === 2) setColor(GREEN);
    else if (i === 3) setColor(PURPLE);
    else setColor("");
    i++
  }

  useEffect(() => {setInterval(changeColor,1500);},[props.contador]);

  useEffect(()=>{setColor("");},[props.apagar]);

  return (
    <div className="container">
      <div id="palito" className="bg-black mx-auto">
      </div>
      <div id="base" className="bg-black mx-auto">
        {props.extra.map((item,index) => (
            <div key={index} onClick={() => {setColor(item);}} className={`trafficLight ${item}` + ((color === item) ? " glow" : "")}></div>
        ))}
      </div>
    </div>
  );
};

export default Semaforo;

// {(props.contador) ? changeColor() : null}


// useEffect(() => {
//   if (props.extra === true){
//     for(let i=0; i<13; i++){
//       setTimeout(() => {
//         if (i === 0 || i === 4 || i === 8) setColor(RED);
//         else if (i === 1 || i === 5 || i === 9) setColor(YELLOW);
//         else if (i === 2 || i === 6 || i === 10) setColor(GREEN);
//         else if (i === 3 || i === 7 || i === 11) setColor(PURPLE);
//         else if (i === 12) setColor("");
//         }, 1300*i);}
//   }
//   else for(let i=0; i<10; i++){
//     setTimeout(() => {
//       if (i === 0 || i === 3 || i === 6) setColor(RED);
//       else if (i === 1 || i === 4 || i === 7) setColor(YELLOW);
//       else if (i === 2 || i === 5 || i === 8) setColor(GREEN);
//       else if (i === 9) setColor("");
//       }, 1300 * i);}
// },[props.contador]);

{/* <div onClick={() => {setColor(RED);}} className={"trafficLight lightRed" + ((color === RED) ? " glow" : "")}></div>
<div onClick={() => {setColor(YELLOW);}} className={"trafficLight lightYellow" + ((color === YELLOW) ? " glow" : "")}></div>
<div onClick={() => {setColor(GREEN);}} className={"trafficLight lightGreen" + ((color === GREEN) ? " glow" : "")}></div>

{(props.extra.length === 4) ? <div onClick={() => {setColor(PURPLE);}} className={"trafficLight purple" + ((color === PURPLE) ? " glow" : "")}></div> : null} */}