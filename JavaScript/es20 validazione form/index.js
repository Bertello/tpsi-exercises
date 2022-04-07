"use strict";

window.onload = function () {
	let _txtMatricola = document.getElementById("matricola");
    let _txtCognome = document.getElementById("cognome");
    let _txtNome = document.getElementById("nome");
	let _optGenere = document.getElementsByName("genere");
    let _lstRegione = document.getElementById("regione");
	let _chkLavoratore = document.getElementById("lavoratore");
    let _txtDescrizione = document.getElementById("descrizione");

	_lstRegione.selectedIndex = -1;
	_txtMatricola.addEventListener("change", controllaMatricola)
	_txtCognome.addEventListener("change", controllaCognome)
    _txtNome.addEventListener("change", controllaNome)
	_chkLavoratore.addEventListener("click", abilitaDescrizione)
	

	document.querySelector("input[type=button]").addEventListener("click", validaForm)
	function controllaMatricola(){
		if(isDigit(_txtMatricola.value) == false || _txtMatricola.value.length != 12)
		_txtMatricola.classList.add("red-border")
		else
		_txtMatricola.classList.remove("red-border")
		
	}
	function controllaCognome(){
		if(_txtCognome.value == "")
		_txtCognome.classList.add("red-border")
		else
		{
			if(isLetter(_txtCognome.value) == false)
			_txtCognome.classList.add("red-border")
			else
			_txtCognome.classList.remove("red-border")
		}
	}
	function controllaNome(){
		if(_txtNome.value == "")
		_txtNome.classList.add("red-border")
		else
		{
			if(isLetter(_txtNome.value) == false)
			_txtNome.classList.add("red-border")
			else
			_txtNome.classList.remove("red-border")
		}
	}
    function abilitaDescrizione(){
		if(_chkLavoratore.checked == true)
		_txtDescrizione.disabled = false;
		else
		_txtDescrizione.disabled = true;
	}
	function validaForm(){
		// MATRICOLA
        if(isDigit(_txtMatricola.value) == false || _txtMatricola.value.length != 12)
		{
			_txtMatricola.classList.add("red-border")
			alert("input matricola errato(solo numeri e lugnhezza richiesta 12)")
		}
		else
		_txtMatricola.classList.remove("red-border")
		// COGNOME
		if(_txtCognome.value == "")
		{
		    _txtCognome.classList.add("red-border")
		    alert("input cognome vuoto")
		}
		else
		{
			if(isLetter(_txtCognome.value) == false)
			{
			    _txtCognome.classList.add("red-border")
				alert("input cognome errato(inserire solo lettere)")
			}
			else
			_txtCognome.classList.remove("red-border")
		}
		//NOME
		if(_txtNome.value == "")
		{
		    _txtNome.classList.add("red-border")
			alert("input nome vuoto")
		}
		else
		{
			if(isLetter(_txtNome.value) == false)
			{
			   _txtNome.classList.add("red-border")
			   alert("input nome errato(inserire solo lettere)")
			}
			else
			_txtNome.classList.remove("red-border")
		}
		// GENERE
		if(_optGenere.checked == false)
		{
		_optGenere.classList.add("red-border")
		alert("Selezionare un genere")
		}
	    // REGIONE
		if(_lstRegione.value == "")
		{
		   _lstRegione.classList.add("red-border")
		   alert("Selezionare una regione")
		}
        // STUDENTE LAVORATORE
		if(_chkLavoratore.checked == true)
		{
			if(_txtDescrizione.value == "")
			{
			_txtDescrizione.classList.add("red-border")
			alert("input descrizione vuoto")
			}
		}
	}
}
	

