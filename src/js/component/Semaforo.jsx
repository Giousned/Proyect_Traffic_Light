import React from "react";

import "../../styles/semaforo.css";


const Semaforo = (props) => {

  return (
    <div className="container">
      <div id="palito" className="bg-black mx-auto">
      </div>
      <div id="base" className="bg-black mx-auto">
        {props.extra.map((item,index) => (
            <div key={index} onClick={() => {props.setColor(item);}} className={`trafficLight ${item}` + ((props.color === item) ? " glow" : "")}></div>
        ))}
      </div>
    </div>
  );
};

export default Semaforo;

// ASÍ ES COMO SE HACE REPITIENDO CODIGO Y SIN MAPEAR Y SIN FACTORIZAR
// <div onClick={() => {setColor(RED);}} className={"trafficLight lightRed" + ((color === RED) ? " glow" : "")}></div>
// <div onClick={() => {setColor(YELLOW);}} className={"trafficLight lightYellow" + ((color === YELLOW) ? " glow" : "")}></div>
// <div onClick={() => {setColor(GREEN);}} className={"trafficLight lightGreen" + ((color === GREEN) ? " glow" : "")}></div>

// {(props.extra.length === 4) ? <div onClick={() => {setColor(PURPLE);}} className={"trafficLight purple" + ((color === PURPLE) ? " glow" : "")}></div> : null}