"use strict"

var matrice = [
	["0", "1", "2", "3", "4", "5"],
	["6", "7", "8", "9", "A", "B"],
	["C", "D", "E", "F", "G", "H"],
	["I", "J", "K", "L", "M", "N"],
	["O", "P", "Q", "R", "S", "T"],
	["U", "V", "W", "X", "Y", "Z"]];

let vet = []


// vettori dove salvare i 5 numeri generati 
var nSegreti = new Array(5);

window.onload = function () {

	let _txtUser = document.getElementById("txtUser");
	let _txtPwd = document.getElementById("txtPwd");
	let _txtCaptcha = document.getElementById("txtCaptcha");
	let _divsCaptcha = document.getElementsByClassName("captcha");

	let _btnControllaCaptcha = document.getElementById("btnControllaCaptcha")
	let _btnGeneraCaptcha = document.getElementById("btnGeneraCaptcha")
	let _btnInvia = document.getElementById("btnInvia")

	generaCaptcha()
	_txtUser.addEventListener("change", controllaUser)
	_txtPwd.addEventListener("change", controllaPwd)
	_btnGeneraCaptcha.addEventListener("click", generaCaptcha)
	_btnControllaCaptcha.addEventListener("click",controllaCaptcha)

	function controllaUser(){
		if(this.value.length < 8)
		    this.classList.add("bordoRosso")
		else
		    this.classList.remove("bordoRosso")
		     
	}

	function controllaCaptcha() {
		
	}
	function generaCaptcha() {
		vet = []
		for (let i = 0; i < 5; i++) {
			let riga = generaNumero(0, 6)
			let colonna = generaNumero(0, 6)
			_divsCaptcha[i].style.backgroundPosition = -50 * riga + "px " + -50 * colonna + "px"
			_divsCaptcha[i].id = "div-" + riga + "-" + colonna;
			vet.push(matrice[riga][colonna])
		}
	}
	function controllaPwd(){
        let errore = false
		if(this.value.length < 8)
		   errore = true
		if(this.value.search(/0-9/) == false)
		   errore = true
		if(this.value.search(/a-z/) == false)
           errore = true
		if(this.value.search(/A-Z/) == false)
           errore = true
        if(errore)
		   this.classList.add("bordoRosso")
		else
		   this.classList.remove("bordoRosso")
	}
}






function generaNumero(min, max) {
	let rnd = Math.floor((max - min) * Math.random()) + min;
	return rnd;
}