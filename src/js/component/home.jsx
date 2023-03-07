import React, { useState } from "react";

import Semaforo from "./Semaforo.jsx";
import Buttons from "./Buttons.jsx";

import { RED, YELLOW, GREEN, PURPLE, lightColors } from "../component/config.jsx"

//create your first component
const Home = () => {
	const [extra, setExtra] = useState(lightColors);

	const [changeColor, setChangeColor] = useState(false);
	const [color, setColor] = useState("");

	if(changeColor) {
		setTimeout(() => {
			if(!changeColor) return;
			setColor(prev => {
				if(!changeColor) return "";
				const indicePrev = extra.indexOf(prev);
				if(extra.length === (indicePrev + 1) || indicePrev === -1) {
					return extra[0];
				}
				return extra[indicePrev+1]
			})
		},1500)
	}

	console.log(changeColor);
	console.log(color);


	const handleSwicthOFF = () => {
		setChangeColor(false);
		setColor("");
	}

	const handleColorChange = () => {
		setChangeColor(!changeColor);
  	}

	const handleAddExtra = () => {
		if(extra.includes(PURPLE)) setExtra([...lightColors])
		else setExtra([...lightColors,PURPLE]);
  	}

	return (
		<div className="text-center" id="cuerpo">
			<Semaforo extra={extra} color={color} setColor={setColor} />
			<Buttons handleColorChange={handleColorChange} handleSwicthOFF={handleSwicthOFF} handleAddExtra={handleAddExtra}/>
		</div>
	);
};

export default Home;
