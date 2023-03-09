import React, { useState } from "react";

import Semaforo from "./Semaforo.jsx";
import Buttons from "./Buttons.jsx";

import { RED, YELLOW, GREEN, PURPLE, lightColors } from "../component/config.jsx"

let contador = 0;
let valorCiclos = 2;

//create your first component
const Home = () => {
	const [extra, setExtra] = useState(lightColors);

	const [changeColor, setChangeColor] = useState(false);
	const [color, setColor] = useState("");

	let timer = 0;

	function cambiarColor () {
		contador += 1;
		if(contador <= extra.length*valorCiclos) {
			setColor((prev) => {
				const indicePrev = extra.indexOf(prev);
				if (extra.length === (indicePrev + 1) || indicePrev === -1) {
					return extra[0];
				}
				return extra[indicePrev + 1]
			})
		}
		else {
			setChangeColor(false);
			setColor("");
			clearTimeout(timer);
			contador = 0;
		}
	}

	if (changeColor) timer = setTimeout(cambiarColor,1500);

	const handleSwicthOFF = () => {
		setChangeColor(false);
		setColor("");
		clearTimeout(timer);
	}

	const handleColorChange = () => {
		// Despues de la "," se pone un valor por defecto
		// Prompt devuelve un valor como STRING, por eso hay que convertir a numero, aunque aquí luego se usa
		// para multiplicar y no haría falta porque JS ya lo hace antes por nosotros, pero si quisieramos
		// sumar es obligatorio si no queremos que concatene
		valorCiclos = Number(prompt("Introduce cuantos ciclos quieres:", "2")); 
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

// NO CONSIGO QUE EL SETINTERVAL ME FUNCIONE BIEN SIN VOLVERSE LOCO
// n=0;
// 	x = setInterval(function(){
// 		console.log(n);
// 		if(n==100){ clearInterval(x); }
// 		n++;
// 	},1000);

// ASI NO SE DEBE HACER, PORQUE HAY 2 CAMBIOS DE ESTADOS ANIDADOS Y LUEGO NO SE PUEDE DETENER
// Y SE VUELVE LOCO, FATAL USO DEL USEEFFECT
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