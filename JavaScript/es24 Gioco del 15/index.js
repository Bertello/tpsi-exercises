"use strict"

window.onload = function(){
	let _wrapper = document.getElementById("wrapper")
	let _div
	let pos
	let cas
	let vet = []
	for(let i = 1;i < 16;i++)
	    vet[i - 1] = i
	for(let i = 0;i < 4;i++)
    {
		for(let j = 0;j < 4;j++)
		{
			_div = document.createElement("div")
			_wrapper.appendChild(_div)
			_div.style.backgroundColor = "grey"
			_div.style.width = "40px"
			_div.style.width = "40px"
			_div.style.margin = "2px"
			_div.id = "div-" + i + "-" + j
			if(j != 3 || i!= 3)
			{
				pos = generaNumero(0,vet.length)
                cas = vet[pos];
				vet.splice(pos,1)
				_div.style.backgroundColor = "blue"
				_div.innerHTML = cas
				_div.style.color = "white"
			}
			_div.addEventListener("click", controlla)
		}
	}
	function controlla() {
		let aus = this.id.split("-")
		let r = parseInt(aus[1])
		let c = parseInt(aus[2])
		//SOPRA
		if(r != 0)
		{
		    let cella = document.getElementById(`div-${r - 1}-${c}`)
			if(cella.innerHTML == "")
			    swap(this, cella)
		}
		//SINISTRA
		if(c != 0)
		{
		    let cella = document.getElementById(`div-${r}-${c - 1}`)
			if(cella.innerHTML == "")
			    swap(this, cella)
		}
		//SOTTO
		if(r != 3)
		{
		    let cella = document.getElementById(`div-${r + 1}-${c}`)
			if(cella.innerHTML== "")
			    swap(this, cella)
		}
		//DESTRA
		if(c != 3)
		{
		    let cella = document.getElementById(`div-${r}-${c + 1}`)
			if(cella.innerHTML == "")
			    swap(this, cella)
		}
		controllaVincita()
	}
	function controllaVincita() {
        let cnt = 1;
		let vinto = true
		for(let i = 0;i < 4;i++)
		{
			for(let j = 0;j < 4;j++)
			{
				let cella = document.getElementById(`div-${i}-${j}`)
                if(cnt != cella.innerHTML)
                   vinto = false
				cnt++
			}
		}
		if(vinto == true)
		alert("Hai vinto")
	}
	function swap(cella1, cella2){
        cella2.textContent = cella1.textContent
		cella1.textContent = ""
        cella2.style.backgroundColor = "blue"
		cella1.style.backgroundColor = "grey"
	}
}







function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}