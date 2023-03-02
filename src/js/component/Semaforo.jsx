import React from "react";

import "../../styles/semaforo.css";

const Semaforo = () => {
  return (
    <div className="container">
      <div id="palito" className="bg-black mx-auto">
      </div>
      <div id="base" className="bg-black mx-auto">
        <div className="trafficLight lightRed"></div>
        <div className="trafficLight lightYellow"></div>
        <div className="trafficLight lightGreen"></div>
      </div>
      
    </div>
  );
};

export default Semaforo;
