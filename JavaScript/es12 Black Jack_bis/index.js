"use strict"
let _txtBanco
let _btnBanco
let _txtUser
let _txtNum
let _chkNum
let puntGiocatore = 0;
let puntBanco = 0;


window.onload = function(){
    _txtBanco = document.getElementById("txtBanco")
    _btnBanco = document.getElementById("btnBanco")
    _txtUser = document.getElementById("txtUser")
    _txtNum = document.getElementsByName("txtNum")
    _chkNum = document.getElementsByName("chkNum")
    puntBanco = generaNumero(1,11)
	_txtBanco.value = puntBanco
}

function banco(){
	for(let i = 0;i < 9;i++)
	_chkNum[i].disabled = true
    puntBanco += generaNumero(1,11)
	_txtBanco.value = puntBanco
	if(puntBanco >= 21)
	{
		alert("Hai perso")
		_btnBanco.disabled = true
	}
	else if(puntBanco >= 17 && puntBanco < 21)
	{
        if(21-puntGiocatore > 21-puntBanco)
		alert("Ha vinto il banco!")
		else
		alert("Hai vinto")

		_btnBanco.disabled = true;
	}
}

function visualizza(){
	for(let i = 0;i < 9;i++)
	{
		if(_chkNum[i].checked == true && _chkNum[i].disabled == false)
		{
		   _txtNum[i].value = generaNumero(1,11)
		   _chkNum[i].disabled = true
		   puntGiocatore += parseInt(_txtNum[i].value)
		}
	}
	if(puntGiocatore >= 21)
	{
		alert("Hai perso")
		for(let i = 0;i < 9;i++)
		_chkNum[i].disabled = true
		_btnBanco.disabled = true;
	}
	_txtUser.value = puntGiocatore
}





function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}