"use strict"

window.onload = function(){
    let _txtNPartecipanti = document.getElementById("txtNPartecipanti")
	let _txtDataInizio = document.getElementById("txtDataInizio")
	let _txtDataFine = document.getElementById("txtDataFine")
	let _btnCalcola = document.getElementById("btnCalcola")
	let _risultato = document.getElementById("risultato")
    let _imgSconto = document.getElementById("imgSconto")

	_txtDataFine.disabled = true;
	let today = new this.Date()
    _txtDataInizio.min = today.toISOString().substr(0,10)

	_txtDataInizio.addEventListener("change",function(){
		let sconto
		let dataInizio = _txtDataInizio.value
		dataInizio = new Date(dataInizio)
		if(dataInizio.getMonth() == 5)
			_imgSconto.src = "img/sconto20.jpg"
		else if(dataInizio.getMonth() == 6)
		    _imgSconto.src = "img/sconto15.jpg"
		else if(dataInizio.getMonth() == 7)
		    _imgSconto.src = "img/sconto10.jpg"
		else  
		    _imgSconto.src = ""
		
		let dataFinemin = dataInizio.getTime() + (24 * 3600 * 1000)
		dataFinemin = new Date(dataFinemin)
		_txtDataFine.min = dataFinemin.toISOString().substr(0,10)
		_txtDataFine.disabled = false
		_txtDataFine.value = ""
	})
	let importoUnitario = 200
	_btnCalcola.addEventListener("click", function(){
		let nPersone = _txtNPartecipanti.value
		if(nPersone == "" || nPersone < 1 || nPersone > 9)
            alert("Numero partecipanti non valido")
		else if(_txtDataInizio.value == "" || _txtDataFine.value == "")
		alert("Inserire data inizio e data fine")
		else
		{
            let msec = new Date(_txtDataFine.value) - new Date(_txtDataInizio.value)
			let giorni = msec / (24*3600*1000)
			let importo = giorni * importoUnitario * nPersone
			_risultato.innerHTML = importo + "€"
		}
	})
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}