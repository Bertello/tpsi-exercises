"use strict"

let _btnColore
let _btnDimensione
let _btnSfondo
let _titolo
let _txtSize
let _body
let _btnBordo
let _imgBox
let _btnImg1
let _btnImg2
let _btnImg3

window.onload = function(){
	_btnColore = this.document.getElementById("btnColore")
	_btnDimensione = document.getElementById("btnDimensione")
	_txtSize = document.getElementById("txtSize")
	_titolo = document.getElementById("titolo")
	_btnSfondo = document.getElementById("btnSfondo")
	_body = document.getElementsByTagName("body")[0]
	_btnBordo = document.getElementById("btnBordo")
	_imgBox = document.getElementById("imgBox")
	_btnImg1 = document.getElementById("btnImg1")
	_btnImg2 = document.getElementById("btnImg2")
	_btnImg3 = document.getElementById("btnImg3")

    // SOLUZIONE 1
    _btnColore.addEventListener("click",cambiaColore)
   	// SOLUZIONE 2
    //_titolo.style.backgroundColor = "blue"
    _btnDimensione.addEventListener("click",cambiaDimensione)
    _btnSfondo.addEventListener("click",cambiaSfondo)
    _btnBordo.addEventListener("click",cambiaBordo)
	_btnImg1.addEventListener("click",cambiaImmagine)
	_btnImg2.addEventListener("click",cambiaImmagine)
    _btnImg3.addEventListener("click",cambiaImmagine)

}

function cambiaImmagine(){
	let img = this.value  //this indica l'elemento che ha scatenato l'evento
	_imgBox.src = "img/" + img + ".jpg" 
}

function cambiaBordo(){
    if(getComputedStyle(_titolo).borderColor == "rgb(255, 0, 0)")
	_titolo.style.borderColor = "white"
	else
	_titolo.style.borderColor = "rgb(255, 0, 0)"

}
function cambiaSfondo(){
	if(_body.style.backgroundImage == "")
	{
		_body.style.backgroundImage = "#eaeaea url(img/bg.jpg) repeat"
	}
	else
	_body.style.backgroundImage == ""
}

function cambiaDimensione(){
	let size = _txtSize.value
	if(size <= 23 && size >= 5)
	_titolo.style.fontSize = size + "pt"
	else
	alert("Dimensione non valida")
}

function cambiaColore(){
	//SOLUZIONE 1
	if(getComputedStyle(_titolo).backgroundColor == "rgb(0, 0, 255)")
	{
		_titolo.style.backgroundColor = "yellow"
	    _titolo.style.color = "blue"
	}
	else
	{
		_titolo.style.backgroundColor = "blue"
	    _titolo.style.color = "yellow"
	}
	/* SOLUZIONE 2
	if(_titolo.style.backgroundColor == "blue")
	{
		_titolo.style.backgroundColor = "yellow"
	    _titolo.style.color = "blue"
	}
	else
	{
		_titolo.style.backgroundColor = "blue"
	    _titolo.style.color = "yellow"
	}*/
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}