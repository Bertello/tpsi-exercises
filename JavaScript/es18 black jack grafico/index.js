"use strict";

let vet = []

window.onload=function(){
    let _btnG=document.getElementsByClassName("card")[0]
    let _cartaG=document.getElementsByClassName("card")[1]
    let _btnB=document.getElementsByClassName("card")[2]
    let _cartaB=document.getElementsByClassName("card")[3]
	let _puntiG = document.getElementsByTagName("span")[0]
	let _puntiB = document.getElementsByTagName("span")[1]	
    let _assoG=document.getElementsByClassName("msgAsso")[0]
    let _assoB=document.getElementsByClassName("msgAsso")[1]
    let _chkG = _assoG.children[0] // .children è la collezione di tutti i figli diretti dell'elemento
    let _chkB = _assoB.children[0]

    _assoG.style.visibility = "hidden"
    _assoB.style.visibility = "hidden"
    _btnG.style.opacity = "0.5"
    _btnB.style.opacity = "0.5"

    _btnG.addEventListener("mouseover", rollOn)
    _btnB.addEventListener("mouseover",rollOn)
    _btnG.addEventListener("mouseout", rollOff)
    _btnB.addEventListener("mouseout",rollOff)
    _btnG.addEventListener("click",cartaGiocatore)
    _btnB.addEventListener("click",cartabanco)
    _chkG.addEventListener("click", function(){
        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + 10
        if(parseInt(_puntiG.innerHTML) > 21)
        {
            alert("Ha vinto il giocatore, fine partita")
            finePartita()
        }
        else
        {
            if(parseInt(_puntiG.innerHTML >= 17 && parseInt(_puntiG.innerHTML)< 21))
            {
                if(parseInt(_puntiG.innerHTML) < parseInt(_puntiG.innerHTML))
                {
                    alert("Giocatore vince")
                    finePartita()
                }
                else
                {
                    alert("Vince il banco")
                    finePartita()
                }
            }
        }
    })


    function cartabanco(){
        _btnG.removeEventListener("mouseover", rollOn)
        _btnG.removeEventListener("click", cartaGiocatore)
        let carta
        carta = generaCarta()
        _cartaB.style.backgroundImage = "url(img/"+ carta + ".gif)"
        let punti = valore(carta)
        if(punti > 10)
        punti = 10
        if(punti == 1)
        _assoB.style.visibility = "visible"
        else
        _assoB.style.visibility = "hidden"
        _puntiB.innerHTML = parseInt(_puntiB.innerHTML) + punti
        if(parseInt(_puntiB.innerHTML) > 21)
        {
            alert("Ha vinto il giocatore, fine partita")
            finePartita()
        }
        else
        {
            if(parseInt(_puntiB.innerHTML >= 17 && parseInt(_puntiB.innerHTML)< 21))
            {
                if(parseInt(_puntiB.innerHTML) < parseInt(_puntiB.innerHTML))
                {
                    alert("Giocatore vince")
                    finePartita()
                }
                else
                {
                    alert("Vince il banco")
                    finePartita()
                }
            }
        }

    }

    function rollOn(){
        this.style.opacity = "1"
    }
    
    function rollOff(){
        this.style.opacity = "0.5"
    }
    
    function cartaGiocatore(){
        let carta
        carta = generaCarta();
        _cartaG.style.backgroundImage = "url(img/"+ carta + ".gif)";
        let punti = valore(carta)
        if(punti > 10)
        punti = 10
        if(punti == 1)
        _assoG.style.visibility = "visible"
        else
        _assoG.style.visibility = "hidden"
        _puntiG.innerHTML = parseInt(_puntiG.innerHTML) + punti
        if(parseInt(_puntiG.innerHTML) > 21)
        {
            alert("Hai perso")
            finePartita();
        }
    }

    function valore(carta){
        return parseInt(carta.substr(1))
    }

    function generaCarta(){
        let carta
        let aus = ["a","b","c","d"]
        do
        {
            let seme = generaNumero(0,4)
            let valore = generaNumero(1,14)
            carta = aus[seme] + valore
        }while(vet.includes(carta))
        vet.push(carta)
        return carta;
    
    }
    
    function generaNumero(a, b){
        return Math.floor((b-a)*Math.random())+a
    }
    
    function finePartita(){
        _btnG.removeEventListener("mouseover", rollOn)
        _btnB.removeEventListener("mouseover",rollOn)
        _btnG.removeEventListener("click", cartaGiocatore)
        _btnB.removeEventListener("click",cartabanco)
    }
}

