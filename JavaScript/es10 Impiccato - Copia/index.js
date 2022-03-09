"use strict"

let _txtParola
let _txtLettera
let _img
let pos
let parolasegreta
let contaCorrette
let contaErrate
let _btnInvia
contaErrate = 0;
const nomi = ["Italia", "Lavagna", "Pizza", "Lasagne", "Spiedino", "Ananas", "Gnocchi", "Gorgonzola", "Broccoli", "Mango", "Biscotti", 
			  "Giornale", "Carabina", "Affettati", "Lungimirante", "Affaticato", "Effervescente", "Ambulante", "Ambulanza", "Ostetricia"]
let asterischi = []
window.onload = function(){
    _txtParola = document.getElementById("txtParola")
	_txtLettera = document.getElementById("txtLettera")
	_img = document.getElementById("img")
	_btnInvia = document.getElementById("btnInvia")
	pos = generaNumero(0,20)
    parolasegreta = nomi[pos]
	console.log(parolasegreta)
	for(let i = 0;i < parolasegreta.length;i++)
		_txtParola.value += "*"
}

function elabora(){
	contaCorrette = 0;
	parolasegreta = parolasegreta.toLowerCase(parolasegreta)
	let lettera
	lettera = _txtLettera.value
	let trovato = false
	
	let aus = _txtParola.value
	_txtParola.value = ""

	for(let i = 0;i < parolasegreta.length;i++)
	{
		if(lettera == parolasegreta[i])
		{
			_txtParola.value += "" + lettera + ""
			trovato = true;
		}
		else
		{
		    _txtParola.value += aus[i]
		}
	}
	aus = _txtParola.value
	if(trovato == false)
	{
		contaErrate++;
	    _img.src = "img/Fig" + contaErrate + ".png"
	}
	if(contaErrate == 5)
	{
		alert("Hai perso")
        _btnInvia.disabled= true
	}
    
	for(let i = 0;i < aus.length;i++)
	{
		if(aus[i] != "*")
		contaCorrette++;
	}
	if(aus.length == contaCorrette)
	{
		alert("hai vinto")
		_btnInvia.disabled= true
	}
	
}


function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}