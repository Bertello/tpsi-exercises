"use strict"

window.onload = function(){
	let _wrapper = document.getElementById("wrapper")
	let numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
	for(let i = 0;i < 4;i++)
	{
		for(let j = 0;j < 4;j++)
		{
			let _div = document.createElement("div")
			_wrapper.appendChild(_div)
			_div.id = "div-" + i + "-" + j
			_div.style.width = "40px"
			_div.style.height = "40px"
			_div.style.margin = "2px"
			_div.style.padding = "0px"
			if(i == 3 && j == 3)
				_div.style.backgroundColor = "grey"
			else
			{
				_div.style.backgroundColor = "blue"
				_div.style.color = "white"
				let pos = generaNumero(0,numeri.length)
				_div.innerHTML = numeri[pos]
				numeri.splice(pos,1)
			}
			_div.addEventListener("click",scambio)
		}
	}
	function scambio (){
		let aus = this.id.split("-")
		let r = parseInt(aus[1])
		let c = parseInt(aus[2])
		let scambio = false
		let _pedina = ""
		if(r > 0)
		{
			_pedina = document.getElementById("div-"+ (r - 1) + "-" + c)
			if(_pedina.style.backgroundColor == "grey")
			{
                _pedina.style.backgroundColor = "blue"
				_pedina.style.color = "white"
				_pedina.innerHTML = this.innerHTML
				this.style.backgroundColor = "grey"
				this.innerHTML = ""
				scambio = true
			}
		}
		if(r < 3 && scambio == false)
		{
			_pedina = document.getElementById("div-"+ (r + 1) + "-" + c)
			if(_pedina.style.backgroundColor == "grey")
			{
                _pedina.style.backgroundColor = "blue"
				_pedina.style.color = "white"
				_pedina.innerHTML = this.innerHTML
				this.style.backgroundColor = "grey"
				this.innerHTML = ""
				scambio = true
			}
		}
		if(c > 0 && scambio == false)
		{
			_pedina = document.getElementById("div-"+ r + "-" + (c - 1))
			if(_pedina.style.backgroundColor == "grey")
			{
                _pedina.style.backgroundColor = "blue"
				_pedina.style.color = "white"
				_pedina.innerHTML = this.innerHTML
				this.style.backgroundColor = "grey"
				this.innerHTML = ""
				scambio = true
			}
		}
		if(c < 3 && scambio == false)
		{
			_pedina = document.getElementById("div-"+ r + "-" + (c + 1))
			if(_pedina.style.backgroundColor == "grey")
			{
                _pedina.style.backgroundColor = "blue"
				_pedina.style.color = "white"
				_pedina.innerHTML = this.innerHTML
				this.style.backgroundColor = "grey"
				this.innerHTML = ""
				scambio = true
			}
		}
		controllaOrdinamento()
	}
	function controllaOrdinamento(){
		let k = 0
		let numPrec = 0
		for(let i = 0;i < 4;i++)
		{
			for(let j = 0;j < 4;j++)
			{
				let _div1 = document.getElementById("div-" + i + "-" + j)
				if(parseInt(_div1.innerHTML) > numPrec)
				{
					k++
					numPrec = parseInt(_div1.innerHTML)
				}
			}
		}
		if(k == 15)
		{
		    alert("HAI VINTO")
			for(let i = 0;i < 4;i++)
		    {
			    for(let j = 0;j < 4;j++)
			    {
				   let _div1 = document.getElementById("div-" + i + "-" + j)
				   _div1.removeEventListener("click",scambio)
			    }
		    }
		}
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}