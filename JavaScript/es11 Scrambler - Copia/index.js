"use strict"
let _divVet1
let _divVet2
let _txt1
let _txt2
let vet1 = []
let vet2 = []
let aus = []
let pos

window.onload = function(){
	_divVet1 = document.getElementById("divVet1")
	_divVet2 = document.getElementById("divVet2")
	_txt1 = document.getElementById("txt1")
	_txt2 = document.getElementById("txt2")
    for(let i = 65;i <= 90;i++)
	{
	   vet1[i - 65] = String.fromCharCode(i);
	   aus[i - 65] = String.fromCharCode(i);
	}
    for(let i = 0;i < 26;i++)
	{
		pos = generaNumero(0,aus.length)
		vet2[i] = aus[pos]
		aus.splice(pos,1);
	}
	console.log(vet2)
	for(let i = 0;i < 26;i++)
	{
		_divVet1.innerHTML += (vet1[i] + "       ")
		_divVet2.innerHTML += (vet2[i] + "       ")
	}

}

function scrambler(){
	_txt2.value = ""
	let j = 0;
	var parola = _txt1.value
	let scrambleparola = [];
	for(let i = 0;i < parola.length;i++)
	{
		if(parola[i] >= 'A' && parola[i] <= 'z'){
        while(parola[i] != vet1[j])
		j++;
        scrambleparola[i] = vet2[j]
		j = 0;
		}
		else
		scrambleparola[i] = parola[i]
	}
	for(let i = 0;i < scrambleparola.length;i++)
	_txt2.value += scrambleparola[i]
}
function descrambler(){
	_txt2.value = ""
	let j = 0;
	var parola = _txt1.value
	let descrambleparola = [];
	for(let i = 0;i < parola.length;i++)
	{
		if(parola[i] >= 'A' && parola[i] <= 'z'){
        while(parola[i] != vet2[j])
		j++;
        descrambleparola[i] = vet1[j]
		j = 0;
		}
		else
		descrambleparola[i] = parola[i]
	}
	for(let i = 0;i < descrambleparola.length;i++)
	_txt2.value += descrambleparola[i]
}
function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}