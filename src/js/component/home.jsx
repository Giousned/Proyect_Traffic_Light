import React, { useState } from "react";

import Semaforo from "./Semaforo.jsx";
import Buttons from "./Buttons.jsx";

import { RED, YELLOW, GREEN, PURPLE, lightColors } from "../component/config.jsx"


//create your first component
const Home = () => {
	const [extra, setExtra] = useState(lightColors);

	const [changeColor, setChangeColor] = useState(false);
	const [color, setColor] = useState("");

	let timer = 0;

	function cambiarColor () {
		setColor((prev) => {
			const indicePrev = extra.indexOf(prev);
			if (extra.length === (indicePrev + 1) || indicePrev === -1) {
				return extra[0];
			}
			return extra[indicePrev + 1]
		})
	}

	if (changeColor) timer = setTimeout(cambiarColor,1500);

	// console.log(changeColor);
	// console.log(color);

	const handleSwicthOFF = () => {
		setChangeColor(false);
		setColor("");
		clearTimeout(timer);
	}

	const handleColorChange = () => {
		setColor(RED);
		setChangeColor(!changeColor);
  	}

	const handleAddExtra = () => {
		if(extra.includes(PURPLE)) setExtra([...lightColors])
		else setExtra([...lightColors, PURPLE]);
  	}

	return (
		<div className="text-center" id="cuerpo">
			<Semaforo extra={extra} color={color} setColor={setColor} />
			<Buttons handleColorChange={handleColorChange} handleSwicthOFF={handleSwicthOFF} handleAddExtra={handleAddExtra}/>
		</div>
	);
};

export default Home;

// n=0;
// 	x = setInterval(function(){
// 		console.log(n);
// 		if(n==100){ clearInterval(x); }
// 		n++;
// 	},1000);

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