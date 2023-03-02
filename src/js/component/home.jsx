import React, { useState } from "react";

import Semaforo from "./Semaforo.jsx";
import Buttons from "./Buttons.jsx";



//create your first component
const Home = () => {
	const [apagado, setApagado] = useState(true);
	const [cadena, setCadena] = useState(true);
	const [extra, setExtra] = useState(true);


	const handleSwicthOFF = () => {
		setApagado(!apagado);
	}

	const handleColorChange = () => {
		setCadena(!cadena);
  	}

	  const handleAddExtra = () => {
		setExtra(!extra);
  	}

	return (
		<div className="text-center">
			<Semaforo apagar={apagado} contador={cadena} extra={extra}/>
			<Buttons handleColorChange = {handleColorChange} handleSwicthOFF={handleSwicthOFF} handleAddExtra={handleAddExtra}/>
		</div>
	);
};

export default Home;
