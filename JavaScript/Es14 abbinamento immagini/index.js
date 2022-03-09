"use strict"
let vet = ["arco", "binari", "roulette", "palla", "disco", "luci", "pop corn", "moto", "sci", "aperitivo"];
let vet1 = ["freccia", "treno", "fiches", "canestro", "stereo", "discoteca", "cinema", "casco", "pista", "bar"];
let num = [1,2,3,4,5,6,7,8,9,10]
let _img;
let _txt
let _txtCorrette
let _txtErrate
let _optRisposta
let _imgRisposta
let _txtRisposta
let pos
let pos1;
let cntCorrette = 0;
let cntErrate = 0;

window.onload = function(){
    _img = document.getElementById("img")
	_txt = document.getElementById("txt")
	_txtCorrette = document.getElementById("txtCorrette")
	_txtErrate = document.getElementById("txtErrate")
	_optRisposta = document.getElementsByName("optRisposta")
	_imgRisposta = document.getElementsByClassName("imgRisposta")
	_txtRisposta = document.getElementsByClassName("txtRisposta")
	pos = generaNumero(0,10)
	_img.src = "img/img" + (num[pos]) + " " + vet[pos] + ".jpg"
	_txt.value = vet[pos];
	for(let i = 0;i < 10;i++)
	_imgRisposta[i].src = "img/img" + (i + 1) + " " + vet1[i] + ".jpg"
}

function cancella(){
	for(let i = 0;i < 10;i++){
		_txtRisposta[i].value = "";
	}
}
function controlla(){
	let selezionato = false;
	let rispRadio = 0;
	var rispCorretta = "";
	let posCorretta = 0;
	for(let i = 0;i < 10;i++){
		if(_optRisposta[i].checked == true)
		{
             selezionato = true
             rispRadio = i;
		}
	}
	if(selezionato == false)
	alert("nessun radio button selezionato")
	    rispCorretta = _txtRisposta[pos].value
        posCorretta = pos;

	if((rispCorretta == vet1[posCorretta]) && rispRadio == posCorretta)
	{
		let j = pos;
	    alert("risposta corretta")
		cntCorrette++;
		_txtCorrette.textContent = "Risposte Corrette: " + cntCorrette;
		for(let i = 0;i < 10;i++){
			_optRisposta[i].checked = false;
			_txtRisposta[i].value = "";
		}
		do
           pos = generaNumero(0,vet.length);
		while(pos == j);
		_img.src = "img/img" + (num[pos]) + " " + vet[pos] + ".jpg"
	    _txt.value = vet[pos];
	}
	else
	{
		alert("Risposta errata")
		cntErrate++;
		_txtErrate.textContent = "Risposte errate: " + cntErrate
		alert("Risposta corretta: " + vet1[pos])
	}
}


function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}
function generaNumeroConEsclusione(a, b, nEscl) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris
	do
	{
		ris =  Math.floor((b - a)*Math.random()) + a
	}
	while(ris == nEscl)
	return ris
}