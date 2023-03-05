import React, { useState } from "react";

import Semaforo from "./Semaforo.jsx";
import Buttons from "./Buttons.jsx";

import { PURPLE, lightColors } from "../component/config.jsx"

//create your first component
const Home = () => {
	const [apagado, setApagado] = useState(true);
	const [contador, setContador] = useState(false);
	const [extra, setExtra] = useState(lightColors);


	const handleSwicthOFF = () => {
		setApagado(!apagado);
	}

	const handleColorChange = () => {
		setContador(!contador);
  	}

	const handleAddExtra = () => {
		if(extra.includes(PURPLE)) setExtra([...lightColors])
		else setExtra([...lightColors,PURPLE]);
  	}

	return (
		<div className="text-center" id="cuerpo">
			<Semaforo apagar={apagado} contador={contador} extra={extra}/>
			<Buttons handleColorChange = {handleColorChange} handleSwicthOFF={handleSwicthOFF} handleAddExtra={handleAddExtra}/>
		</div>
	);
};

export default Home;
