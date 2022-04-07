"use strict"

window.onload = function(){
    let _imgUtente = document.getElementById("imgUtente")
	let _imgComputer = document.getElementById("imgComputer")
	let _imgSmall = document.getElementsByClassName("small")
	let _btnGioca = document.getElementById("btnGioca")
    let vet = ["mano","sasso","forbice"]
	let _txtRisultato = document.getElementById("txtRisultato")
	_imgUtente.style.backgroundImage = "url(img/vuota.png)"
	_imgComputer.style.backgroundImage = "url(img/vuota.png)"
    for(let i = 0;i < vet.length;i++)
	{
		_imgSmall[i].style.backgroundImage = "url(img/" + vet[i] + ".png)"
		_imgSmall[i].addEventListener("click",function(){
			vet.splice(i,1)
			let immagine = this.style.backgroundImage
            _imgUtente.style.backgroundImage = immagine
		})
	}
    _btnGioca.addEventListener("click",gioca)
    function gioca(){
		if(_imgUtente.style.backgroundImage.includes("vuota"))
        alert("inserisci un'immagine")
		else
		{
		    let n = generaNumero(0,vet.length)
		   _imgComputer.style.backgroundImage = "url(img/" + vet[n] + ".png)"
		
		   if(_imgUtente.style.backgroundImage.includes("mano"))
		   {
			   if(_imgComputer.style.backgroundImage.includes("forbice"))
               _txtRisultato.textContent = "Vince il computer"
               else
			   _txtRisultato.textContent = "Vince l'utente"
		   }
		   else if(_imgUtente.style.backgroundImage.includes("forbice"))
		   {
			   if(_imgComputer.style.backgroundImage.includes("mano"))
			   _txtRisultato.textContent = "Vince l'utente"
			   else
			   _txtRisultato.textContent = "Vince il computer"
		   }
		   else if(_imgUtente.style.backgroundImage.includes("sasso"))
		   {
				if(_imgComputer.style.backgroundImage.includes("mano"))
				_txtRisultato.textContent = "Vince il computer"
				else
				_txtRisultato.textContent = "Vince l'utente"
		   }
		}
	}
}


function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}