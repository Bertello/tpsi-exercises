"use strict"

window.onload = function(){
	let click = 0;
	let _button
	let _wrapper = document.getElementById("wrapper")
	for(let i = 0;i < 5;i++)
	{
		for(let j = 0;j < 5;j++)
		{
			_button =  document.createElement("button");
			_wrapper.append(_button)
			_button.id = "button-" + i + "-" + j
			_button.bomba = false
			_button.addEventListener("click", controlla)
		}
	}

	for(let i = 0;i < 5;i++)
	{
		let rigcas = generaNumero(0,5)
		let colcas = generaNumero(0,5)
		_button = document.getElementById("button-" + rigcas + "-" + colcas)
		if(_button.bomba == false)
			_button.bomba = true
		else
		i--
	}
    function controlla() {
		click++;
		if(this.bomba == true)
		{
	       this.style.backgroundImage = "url(bomba.png)"
		   alert("Hai perso")
		   disabilita()
		}
		else
		{
			let cont = 0;
			let _bomb = ""
			let aus=this.id.split("-");
            let r= parseInt(aus[1]);
            let c= parseInt(aus[2]);
			if(r > 0)
			{
				_bomb = document.getElementById("button-" + (r - 1) + "-" + c)
				if(_bomb.bomba == true)
				cont++
			}
			if(r < 4)
			{
				_bomb = document.getElementById("button-" + (r + 1) + "-" + c)
				if(_bomb.bomba == true)
				cont++
			}
			if(c > 0)
			{
				_bomb = document.getElementById("button-" + r + "-" + (c - 1))
				if(_bomb.bomba == true)
				cont++
			}
			if(c < 4)
			{
				_bomb = document.getElementById("button-" + r + "-" + (c + 1))
				if(_bomb.bomba == true)
				cont++
			}
			if(cont == 0)
			   this.innerHTML = "X"
			else
			{
				this.innerHTML = cont
                this.style.color = "red"
				this.style.fontWeight = "bold"
			}
			if(click == 20)
			{
			    alert("Hai vinto")
			}
		}
		this.disabled = true;
	}
	function disabilita(){
		for(let i = 0;i < 5;i++)
		{
			for(let j = 0;j < 5;j++)
			{
				let _button1 = document.getElementById("button-" + i + "-" + j)
                _button1.disabled = true
			}
		}
	}
}


function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}