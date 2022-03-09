"use strict"

let vet1 = [];
let vet2 = [];
let aus = [];
let _txt1;
let _txt2;
let _divVet1;
let _divVet2;

window.onload = function() {
	_txt1 = document.getElementById("txt1");
	_txt2 = document.getElementById("txt2");

	for(let i = 65; i <= 90; i++)
	{
		vet1[i - 65] = String.fromCharCode(i);
		aus[i - 65] = String.fromCharCode(i);
	}
	console.log(vet1);
	console.log(aus);
	for(let i = 0; i < vet1.length; i++)
	{
		let pos = generaNumero(0, aus.length);
		vet2[i] = aus[pos];
		aus.splice(pos, 1);
	}
	console.log(vet2);

	_divVet1 = document.getElementById("divVet1");
	_divVet2 = document.getElementById("divVet2");

	_divVet1.style.letterSpacing = "10px";
	_divVet2.style.letterSpacing = "10px";
	for(let i = 0; i < vet1.length; i++)
	{
		_divVet1.innerHTML += vet1[i];
		_divVet2.innerHTML += vet2[i];
	}
}

function scrambler() {
	_txt2.value = "";
	let parola = _txt1.value;
	parola = parola.toUpperCase();

	for(let i = 0; i < parola.length; i++)
	{
		if(parola[i] >= 'A' && parola[i] <= 'Z')
		{
			let j = 0;
			while(vet1[j] != parola[i])
				j++;
			_txt2.value += vet2[j];
		}
		else
			_txt2.value += parola[i];
	}
}

function descrambler() {
	_txt2.value = "";
	let parola = _txt1.value;
	parola = parola.toUpperCase();

	for(let i = 0; i < parola.length; i++)
	{
		if(parola[i] >= 'A' && parola[i] <= 'Z')
		{
			let j = 0;
			while(vet2[j] != parola[i])
				j++;
			_txt2.value += vet1[j];
		}
		else
			_txt2.value += parola[i];
	}
}
function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}