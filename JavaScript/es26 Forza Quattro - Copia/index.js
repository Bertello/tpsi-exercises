"use strict"

window.onload = function(){
	let _wrapper = document.getElementById("wrapper")
	let righe = 6
	let colonne = 7
	let turno = 1
	let _nextPlayer = document.getElementById("nextPlayer")
	for(let i = 0;i < righe;i++)
	{
		for(let j = 0;j < colonne;j++)
		{
			let _pedina = document.createElement("div")
			_wrapper.appendChild(_pedina)
			_pedina.classList.add("pedina")
			_pedina.id = "pedina-" + i + "-" + j
			if(i == righe - 1)
			_pedina.addEventListener("click",coloraPedina)
			else
			_pedina.removeEventListener("click", coloraPedina)
		}
	}
	_nextPlayer.classList.add("pedina")
	_nextPlayer.disabled = true
	_nextPlayer.style.backgroundColor = "yellow"
	function coloraPedina(){
		let aus = this.id.split("-")
		let r = aus[1]
		let c = aus[2]
		this.removeEventListener("click",coloraPedina)
        if(turno % 2 == 0)
		this.style.backgroundColor = "red"
		else
		this.style.backgroundColor = "yellow"
        turno++
		if(_nextPlayer.style.backgroundColor == "yellow")
		_nextPlayer.style.backgroundColor = "red"
		else
		_nextPlayer.style.backgroundColor = "yellow"
        if(r != 0)
		{
			let _abilita = document.getElementById("pedina-" + (r - 1) + "-" + c)
			_abilita.addEventListener("click", coloraPedina)
		}
		controllaVincita(r,c)
	}
	function controllaVincita(r,c){
        let _pedinaCliccata = document.getElementById("pedina-" + r + "-" + c)
		let cont = 0
		for(let i = 0;i < righe;i++)
		{
			let _ControllaPedina =  document.getElementById("pedina-" + i + "-" + c)
			if(_ControllaPedina.style.backgroundColor == _pedinaCliccata.style.backgroundColor)
			{
				cont++
				if(cont == 4)
				{
					alert("HAI VINTO")
					vittoria()
				}
			}
			else 
			cont = 0
		}
		cont = 0
		for(let j = 0;j < colonne;j++)
		{
			let _ControllaPedina =  document.getElementById("pedina-" + r + "-" + j)
			if(_ControllaPedina.style.backgroundColor == _pedinaCliccata.style.backgroundColor)
			{
				cont++
				if(cont == 4)
				{
					alert("HAI VINTO")
					vittoria()
				}
			}
			else 
			cont = 0
		}
		cont = 0
		//Inizio controllo diagonale
		for(let j = 0;j < 4;j++)
		{
			let _thispedina = document.getElementById("pedina-"  + j + "-" + 0)
			for(let k = 0;k < 6;k++)
			{
				let _pedina1 = document.getElementById("pedina-" + k + "-" + (k + j))
				if((k + j) <= 6 && _thispedina.style.backgroundColor == _pedina1.style.backgroundColor && _thispedina.style.backgroundColor != "")
				cont++
				else if(k < 3)
				{
					_thispedina = document.getElementById("pedina-"  + k + "-" + (k + j))
					cont = 1
				}
				else 
				cont = 0

			    if(cont == 4)
				{
					alert("HAI VINTO")
					vittoria()
				}
			}
			cont = 0
		}
		cont = 0
		let rd 
		for(let i = 1;i < 3;i++)
		{
			rd = i
			let _thispedina = document.getElementById("pedina-"  + i + "-" + 0)
			for(let j = 0;j < 5;j++)
			{
                let _pedina1 = document.getElementById("pedina-" + rd + "-" + j)
				if(_thispedina.style.backgroundColor == _pedina1.style.backgroundColor && _thispedina.style.backgroundColor != "")
				cont++
				else if(rd == 2 && j == 1)
				{
					_thispedina = document.getElementById("pedina-"  + rd + "-" + j)
					cont = 1
				}
				else 
				cont = 0
			    if(cont == 4)
				{
					alert("HAI VINTO")
					vittoria()
				}
				rd++
				if(rd == 6 && j == 3)
				j = 5
			}
			cont = 0
		}
		rd = 0
		cont = 0
		for(let j = 3;j < 7;j++)
		{
			let _thispedina = document.getElementById("pedina-" + rd + "-" + j)
			for(let i = 0; i < 6;i++)
			{
				let _pedina1 = document.getElementById("pedina-" + i + "-" + (j - i))
				if(_thispedina.style.backgroundColor == _pedina1.style.backgroundColor && _thispedina.style.backgroundColor != "")
				cont++
				else if(i < 3)
				{
					_thispedina = document.getElementById("pedina-"  + i + "-" + (j - i))
					cont = 1
				}
				else 
				cont = 0
			    if(cont == 4)
				{
					alert("HAI VINTO")
					vittoria()
				}
				if(i == 4 && (j - i) == 0)
				i = 6
				else if(i == 3 && (j - i) == 0)
				i = 6
			}
            cont = 0
		}
		rd = 0
		cont = 0
		for(let i = 1;i < 3;i++)
		{
			rd = i
			let _thispedina = document.getElementById("pedina-" + i + "-" + 6)
			for(let j = 6;j > 1;j--)
			{
				let _pedina1 = document.getElementById("pedina-" + rd + "-" + j)
				if(_thispedina.style.backgroundColor == _pedina1.style.backgroundColor && _thispedina.style.backgroundColor != "")
				cont++
				else if(rd == 2 && j == 5)
				{
					_thispedina = document.getElementById("pedina-"  + rd + "-" + j)
					cont = 1
				}
				else 
				cont = 0
			    if(cont == 4)
				{
					alert("HAI VINTO")
					vittoria()
				}
				if(rd == 5 && j == 3)
				j = i
			    rd++
			}
			cont = 0
		}
	}
	function vittoria(){
		for(let i = 0;i < righe;i++)
		{
			for(let j = 0;j < colonne;j++)
			{
				let _disabilita = document.getElementById("pedina-" + i + "-" + j)
				_disabilita.removeEventListener("click",coloraPedina)
			}
		}
	}
}


function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}