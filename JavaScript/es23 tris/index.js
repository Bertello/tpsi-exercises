"use strict"

window.onload = function(){
	let _table = document.getElementById("table")
	let _divRisutato = document.getElementById("divRisultato")
	let _tr 
	let _td 
	let _img
	let turno = 1
	for(let i = 0;i < 3;i++)
	{
		_tr = document.createElement("tr")
		_table.appendChild(_tr)
		for(let j = 0;j < 3;j++)
		{
			_td = document.createElement("td")
			_tr.appendChild(_td)
			_img = document.createElement("img")
			_td.appendChild(_img)
			_img.id = "img-" + i + "-" + j
			_img.src = "img/vuota.png"
			_img.addEventListener("click", cambiaImmagine)
		}
	}
	function cambiaImmagine(){
		if(turno % 2 != 0)
		   this.src = "img/croce.png"
		else
		   this.src = "img/cerchio.png"
		turno++;
		let aus = this.id.split("-")
		let i = aus[1]
		let j = aus[2]
		controlla(i ,j)
		this.removeEventListener("click",cambiaImmagine)
	}
	function controlla(i,j){
		let cont = 0;
		let cont1 = 0;
		for(let k = 0;k < 3;k++)
		{
			let immagine = document.getElementById(`img-${k}-${j}`)
			if(immagine.src.includes("croce"))
			   cont++;
			else if(immagine.src.includes("cerchio"))
			cont1++;
		}
		if(cont == 3)
	    {
		   _divRisutato.textContent = "Ha vinto il giocatore 1"
		   disabilita()
		}
		else if(cont1 == 3)
	    {
		   _divRisutato.textContent = "Ha vinto il giocatore 2"
		   disabilita()
		}
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		for(let k = 0;k < 3;k++)
		{
			let immagine = document.getElementById(`img-${i}-${k}`)
			if(immagine.src.includes("croce"))
			   cont++;
			else if(immagine.src.includes("cerchio"))
			   cont1++;
		}
		if(cont == 3)
	    {
		   _divRisutato.textContent = "Ha vinto il giocatore 1"
		   disabilita()
		}
		else if(cont1 == 3)
	    {
		   _divRisutato.textContent = "Ha vinto il giocatore 2"
		   disabilita()
		}
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		for(let k = 0;k < 3;k++)
		{
			let immagine = document.getElementById(`img-${k}-${k}`)
			if(immagine.src.includes("croce"))
			   cont++;
			else if(immagine.src.includes("cerchio"))
			   cont1++;
		}
		if(cont == 3)
		{
		   _divRisutato.textContent = "Ha vinto il giocatore 1"
		   disabilita()
		}
		else if(cont1 == 3)
		{
		   _divRisutato.textContent = "Ha vinto il giocatore 2"
		   disabilita()
		}
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		for(let k = 0;k < 3;k++)
		{
			for(let m = 0;m < 3;m++)
			{
				if(k + m == 2)
				{
					let immagine = document.getElementById(`img-${k}-${m}`)
			        if(immagine.src.includes("croce"))
			           cont++;
			        else if(immagine.src.includes("cerchio"))
			           cont1++;
				}

			}
		}
		if(cont == 3)
		{
		   _divRisutato.textContent = "Ha vinto il giocatore 1"
		   disabilita()
		}
		else if(cont1 == 3)
		{
		   _divRisutato.textContent = "Ha vinto il giocatore 2"
		   disabilita()
		}
		else
	    {
			cont = 0;
			cont1 = 0;
		}
		nessunVincitore()
	}
	function nessunVincitore(){
		let cella
		let pareggio = true
		for(let i = 0; i < 3;i++)
		{
			for(let j = 0;j < 3;j++)
			{
                cella = document.getElementById(`img-${i}-${j}`)
				if(cella.src.includes("vuota"))
                pareggio = false
			}
		}
		if(pareggio == true)
		_divRisutato.textContent = "Pareggio"
	}
	function disabilita(){
		for(let i = 0; i < 3;i++)
		{
			for(let j = 0;j < 3;j++)
			{
				let _cancella = document.getElementById(`img-${i}-${j}`)
				_cancella.removeEventListener("click",cambiaImmagine)
			}
		}
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}