"use strict";

let _btncontrolla
let _bandiera
let _nazione
let nazioniSel = 0
let ind = 0;
let pos
let pos1
let _txtCitta
let _chkCitta
let _cnt
let _img
let nazioneVisualizzata
let contClick = 0;
let citta=[
	"Londra", "Liverpool", "Manchester", "Cambridge",
	"Amsterdam", "Rotterdam", "Maastricht",
	"Lisbona", "Oporto", "Braga",
	"Stoccolma", "Goteborg",
	"Kiev", "Leopoli", "Odessa",
	"Berna", "Lugano", "Zurigo", 
	"Madrid", "Barcellona"
]

let nazioni=[
	"Inghilterra", "Inghilterra", "Inghilterra", "Inghilterra", 
	"Olanda", "Olanda", "Olanda",
	"Portogallo", "Portogallo", "Portogallo",
	"Svezia", "Svezia",
	"Ucraina", "Ucraina", "Ucraina",
	"Svizzera", "Svizzera", "Svizzera",
	"Spagna", "Spagna"]

let elencoUnivocoNazioni = []
window.onload = function(){
	_bandiera = document.getElementById("bandiera")
	_nazione = document.getElementById("nazione")
	_txtCitta = document.getElementsByName("txtCitta")
	_cnt = document.getElementById("cnt")
	_chkCitta = document.getElementsByName("chkCitta")
	_img = document.getElementsByClassName("img")
	_btncontrolla = document.getElementById("btncontrolla")
	elencoUnivocoNazioni[ind] = nazioni[0];
	ind++;
	for(let i = 1;i < nazioni.length;i++)
	{
		if(nazioni[i] != nazioni[i - 1])
		{
		   elencoUnivocoNazioni[ind] = nazioni[i];
		   ind++;
		}
	}
	console.log(elencoUnivocoNazioni)
	pos = generaNumero(0,elencoUnivocoNazioni.length)
	_nazione.innerHTML = elencoUnivocoNazioni[pos] 
	_bandiera.src = "img/" + elencoUnivocoNazioni[pos] + ".png"
	nazioneVisualizzata = elencoUnivocoNazioni[pos]
	for(let i = 0;i < 20;i++)
	{
		pos1 = generaNumero(0,nazioni.length)
       _txtCitta[i].value = citta[pos1]
	   _txtCitta[i].masked = nazioni[pos1]
	   nazioni.splice(pos1,1)
	   citta.splice(pos1,1)
	}

}
function controlla(){
	let nazioniSel1 = 0
	_cnt.innerHTML = contClick
	for(let i = 0;i < 20;i++)
	{
		if(_chkCitta[i].checked == true && _chkCitta[i].disabled == false)
           contClick++;
	}
	_cnt.innerHTML = parseInt(contClick)
	for(let i = 0;i < 20;i++)
	{
		if(_chkCitta[i].checked == true && _chkCitta[i].disabled == false)
		{
			if(_txtCitta[i].masked == nazioneVisualizzata)
			{
                _txtCitta[i].disabled = true;
				_chkCitta[i].disabled = true
                _img[i].src = "img/" + nazioneVisualizzata + ".png"
				nazioniSel++;
			}
			else
				_chkCitta[i].checked = false;
		}
	}
	for(let i = 0;i < 20;i++)
	{
        if(_txtCitta[i].masked == nazioneVisualizzata)
		nazioniSel1++;
	}
	if(nazioniSel == nazioniSel1 && elencoUnivocoNazioni.length != 1)
	{
		elencoUnivocoNazioni.splice(pos,1)
		pos = generaNumero(0,elencoUnivocoNazioni.length)
		_nazione.innerHTML = elencoUnivocoNazioni[pos] 
	    _bandiera.src = "img/" + elencoUnivocoNazioni[pos] + ".png"
		nazioneVisualizzata = elencoUnivocoNazioni[pos]
		nazioniSel = 0;
	}
	let vinto = true
	for(let i = 0;i < 20;i++)
	{
		if(_chkCitta[i].disabled != true)
		vinto = false
	}
	if(vinto == true)
	{
	   alert("Hai vinto!")
       _btncontrolla.disabled = true;
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}



