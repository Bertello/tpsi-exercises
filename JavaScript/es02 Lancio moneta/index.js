"use strict"
     let _txtLanci = document.getElementById("txtLanci")
	 let _lblCroce = document.getElementById("lblCroce")
	 let _lblTesta = document.getElementById("lblTesta")

function lanciaMoneta() {
	let lanci = _txtLanci.value 
	let contTesta = 0;
	let contCroce = 0;
	for(let i = 0;i < lanci; i++)
	{
		let lancio = generaNumero(0,2);
        if(lancio == 0)
		   contTesta++;
		else
		   contCroce++;		   
	}
    _lblCroce.textContent = "N. di volte in cui è uscito croce:" + contCroce
	_lblTesta.textContent = "N. di volte in cui è uscito testa:" + contTesta
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}