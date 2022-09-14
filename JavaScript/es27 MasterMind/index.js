"use strict"

const GRIGIO = "rgb(120, 120, 120)"
const ROSSO = "rgb(255, 0, 0)"
const GIALLO = "rgb(255, 255, 0)"
const VERDE = "rgb(0, 220, 0)"
const BLU = "rgb(0, 0, 220)"
const VIOLA = "rgb(135, 38, 165)"

const BIANCO = "rgb(236, 236, 236)"
const NERO = "rgb(0, 0, 0)"

let numSegreti = new Array(4);
let numUtente = new Array(4);
let riga = 0
	
window.onload=function(){
	let colori = []
	colori[0] = GRIGIO
	colori[1] = ROSSO
	colori[2] = GIALLO
	colori[3] = VERDE
	colori[4] = BLU
	colori[5] = VIOLA
	let _table = document.getElementsByTagName("table")
	for(let i = 0;i < 4;i++)
	{
	   numSegreti[i] = generaNumero(0,5); 
	   trovaColore(numSegreti[i])
	}
	console.log(numSegreti)
	creariga()
	function cambiaColore(){
		let aus = this.id.split("-")
		let r = parseInt(aus[1])
		let c = parseInt(aus[2])

         if(this.style.backgroundColor == GRIGIO)
		 this.style.backgroundColor = ROSSO
		 else if(this.style.backgroundColor == ROSSO)
		 this.style.backgroundColor = GIALLO
         else if(this.style.backgroundColor == GIALLO)
		 this.style.backgroundColor = VERDE
		 else if(this.style.backgroundColor == VERDE)
		 this.style.backgroundColor = BLU
		 else if(this.style.backgroundColor == BLU)
		 this.style.backgroundColor = VIOLA
		 else if(this.style.backgroundColor == VIOLA)
		 this.style.backgroundColor = GRIGIO
	}
	function controlla(){
		this.disabled = true
		this.style.visibility = "hidden"
		let cont = 0
		for(let i = 0;i < 4;i++)
		{
			let _dis = document.getElementById("img-" + riga + "-" + i)
			_dis.disabled = true
			for(let j = 0;j < 6;j++)
			{
				if(_dis.style.backgroundColor == colori[j])
				{
					numUtente[cont] = j
					cont++
				}
			}
			if(numSegreti[i] == numUtente[i])
			{
				let _color = document.getElementById("img1-" + riga + "-" + i )
                _color.style.backgroundColor = NERO
			}
		}
		console.log(numUtente)
		riga++;
		if(controllaVincita() == false)
		creariga()
		else
		alert("Hai vinto")
	}
	function creariga(){
		let _tr = document.createElement("tr")
		_table[0].appendChild(_tr)
		let _td = document.createElement("td")
		_tr.appendChild(_td)
		_td.innerHTML = "1"
		let _td1 = document.createElement("td")
		_tr.appendChild(_td1)
		for(let i = 0;i < 4;i++)
		{
			let _img = document.createElement("img")
			_td1.appendChild(_img)
			_img.classList.add("pedina")
			_img.id = "img-" + riga + "-"+ i
			_img.style.backgroundColor = GRIGIO
			_img.addEventListener("click",cambiaColore)
		}
		let _button  = document.createElement("button")
		_td1.appendChild(_button)
		_button.innerHTML = "invia"
		let _td2 = document.createElement("td")
		_tr.appendChild(_td2)
		for(let i = 0;i < 4;i++)
		{
			let _img1 = document.createElement("img")
			_td2.appendChild(_img1)
			_img1.classList.add("pedina")
			_img1.style.backgroundColor = BIANCO
			_img1.id = "img1-" + riga + "-"+ i
		}
		_button.addEventListener("click",controlla)
	}
	function controllaVincita(){
		let vinto = true
		for(let i = 0;i < 4;i++)
		{
			let _ris = document.getElementById("img1-" + (riga - 1) + "-" + i)
			if(_ris.style.backgroundColor != NERO)
			vinto = false
		}
		return vinto
	}
}			


function trovaColore(n){
	let colore =""
	switch (n){
		case 0: colore=GRIGIO; break;
		case 1: colore=ROSSO; break;
		case 2: colore=GIALLO; break;
		case 3: colore=VERDE; break;
		case 4: colore=BLU; break;
		case 5: colore=VIOLA; break;
	}
	return colore;
}

function generaNumero(min, max){
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;   
    return rnd;
}
