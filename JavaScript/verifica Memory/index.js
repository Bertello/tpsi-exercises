"use strict"

window.onload = function(){
	let cont = 0;
	let r,c,r1,c1
	let _wrapper = document.getElementById("wrapper")
	let vet = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	for(let i = 0;i < 4;i++)
	{
		for(let j = 0;j < 5;j++)
		{
			let _div = document.createElement("div")
		    _wrapper.appendChild(_div)
		    _div.classList.add("carta")
		    let pos = (generaNumero(0,vet.length))
		    _div.carta = vet[pos]
		    vet.splice(pos,1)
		    if(_div.carta <= 10)
		    {
		       //_div.style.backgroundImage = "url(img/B" + _div.carta + ".png)"
		       _div.valore = _div.carta
		    }
	        else
		    {
		       //_div.style.backgroundImage = "url(img/s" + (_div.carta - 10) + ".png)"
			   _div.valore = _div.carta - 10
			}
		    _div.addEventListener("click",controlla)
			_div.id = i + "-" + j
			_div.style.backgroundImage = "url(img/dorso.png)"
		}
	}
	function controlla(){
		if(this.visualizzata != "vero")
		{
		cont++;
		if(cont == 1)
		{
			if(this.carta <= 10)
		       this.style.backgroundImage = "url(img/B" + this.carta + ".png)"
	        else
		       this.style.backgroundImage = "url(img/s" + (this.carta - 10) + ".png)"
			let val = this.valore
			let aus = this.id.split("-")
			r = parseInt(aus[0])
		    c = parseInt(aus[1])
			this.visualizzata = "vero"
		}
		if(cont == 2)
        {
			if(this.carta <= 10)
		       this.style.backgroundImage = "url(img/B" + this.carta + ".png)"
	        else
		       this.style.backgroundImage = "url(img/s" + (this.carta - 10) + ".png)"
			let val1 = this.valore
			let aus = this.id.split("-")
			r1 = parseInt(aus[0])
		    c1 = parseInt(aus[1])
			this.visualizzata = "vero"
		}
		if(cont == 3)
		{
			let img1 = document.getElementById(r + "-" + c)
			let img2 = document.getElementById(r1 + "-" + c1)
            if(img1.valore == img2.valore)
			{
				img1.disabled = true
				img2.disabled = true
				img1.style.opacity = "0.3"
				img2.style.opacity = "0.3"
				cont = 0
			}
			else
            {
				img1.style.backgroundImage = "url(img/dorso.png)"
				img2.style.backgroundImage = "url(img/dorso.png)"
				cont = 0
				img1.visualizzata = "falso"
				img2.visualizzata = "falso"
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