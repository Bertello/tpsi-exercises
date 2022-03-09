"use strict"

let _txtBanco
let _txtUser
let _txtNum
let _chkNum
let _btnBanco
let somma = 0

window.onload = function() {
	_txtBanco = document.getElementById("txtBanco")
	_txtBanco.value = generaNumero(1, 11)
	_txtUser = document.getElementById("txtUser")
	_btnBanco = document.getElementById("btnBanco")

	_txtNum = document.getElementsByName("txtNum")
	_chkNum = document.getElementsByName("chkNum")
}

function banco() {
	let n = parseInt(_txtBanco.value)
	n += generaNumero(1, 11)
	_txtBanco.value = n

	for(let i = 0; i < _chkNum.length; i++)
		_chkNum[i].disabled = true

	if(n > 16 && n < 21)
	{
		_btnBanco.disabled = true
		if(somma > n)
			alert("Il giocatore vince!")
		else
			if(somma < n)
				alert("Vince il banco! Hai perso")
			else
				alert("Pareggio")
	}
	else
		if(n > 21)
		{
			alert("Il giocatore vince!")
			_btnBanco.disabled = true
		}
}

function visualizza(num) {
	_txtNum[num].value = generaNumero(1, 11)
	let n = parseInt(_txtNum[num].value)
	somma += n
	_txtUser.value = somma
	_chkNum[num].disabled = true
	if(somma > 21)
	{
		alert("Hai perso")
		_btnBanco.disabled = true
		for(let i = 0; i < _chkNum.length; i++)
			_chkNum[i].disabled = true
	}
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}