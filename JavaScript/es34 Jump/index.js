"use strict";

const COLONNE=61;
const RIGHE=10;
const GRIGIO = "rgb(252, 252, 252)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";


window.onload=function()
{
    var _wrapper = document.getElementById("wrapper");
	let col = -7
	let cont = 0;
	
	// creazione matrice gi gioco
    for (var i = 0; i < RIGHE; i++){
        for (var j = 0; j < COLONNE; j++)
        {
           let _div = document.createElement("div")
		   _wrapper.appendChild(_div)
		   _div.id = "div-" + (9 - i) + "-" + j
		   _div.classList.add("cella")
        }
	}
	var timerID = setInterval(ostacoli,400)
	let player1 = document.getElementById("div-0-30")
	player1.style.backgroundColor = "blue"
	let btnJump = document.getElementById("btnJump")
	btnJump.addEventListener("click", function (){
		player1.style.backgroundColor = null
		player1 = document.getElementById("div-6-30")
	    player1.style.backgroundColor = "blue"
		setTimeout(salto,2000)
	})
	
   function salto(){
	   player1.style.backgroundColor = null
	   player1 = document.getElementById("div-0-30")
	   player1.style.backgroundColor = "blue"
   }

	function ostacoli(){
		col += 7
		let n = random(0,5)
		let rig = 1
		for(let i = 0;i < 10;i++)
		{
            let questo = document.getElementById("div-" + i + "-" +  col)
			questo.style.backgroundColor = null
		}
		for(let i = 0;i < n;i++)
		{
			let ostacolo = document.getElementById("div-" + rig + "-" + col)
			ostacolo.style.backgroundColor = "red"
			rig++
		}
		cont++
		if(cont == 9)
	    {
		    cont = 0
			col = -7
		}
	}

}


function random(a, b){
	return Math.floor((b-a+1)*Math.random()) +a;
}