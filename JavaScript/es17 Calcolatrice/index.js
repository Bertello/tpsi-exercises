"use strinct"

let _btnNum;
let _txtDisplay;
let _btnOperatore;
let _btnRis;
let _btnClear;
let primoNumero = 0;
let operatore;
let canc = false

window.onload = function() {
    _btnNum = document.getElementsByName("btnNum");
    _txtDisplay = document.getElementById("txtDisplay");
    _btnOperatore = document.getElementsByName("btnOperatore");
    _btnRis = document.getElementById("btnRis");
    _btnClear = document.getElementById("btnClear");

    for(let i = 0; i < _btnNum.length; i++) {
        _btnNum[i].addEventListener("click", numero);
    }

    for(let i = 0; i < _btnOperatore.length; i++) {
        _btnOperatore[i].addEventListener("click", segno);
    }

    _btnRis.addEventListener("click", risultato);
    _btnClear.addEventListener("click", cancella);
}

function numero() {
    if(canc)
    {
        _txtDisplay.value = ""
        canc = false
    }
    let n = this.value;
    _txtDisplay.value += n;
}

function segno() {
    operatore = this.value;
    if(_txtDisplay.value == "")
    _txtDisplay.value = 0
    primoNumero = parseFloat(_txtDisplay.value);
    canc = true;
}

function risultato() {
    switch(operatore) {
        case '+':
            _txtDisplay.value = (primoNumero + parseFloat(_txtDisplay.value));
            break;

        case '-':
            _txtDisplay.value = (primoNumero - _txtDisplay.value);
            break;

        case '*':
            _txtDisplay.value = (primoNumero * _txtDisplay.value);
            break;

        case '/':
            _txtDisplay.value = (primoNumero / _txtDisplay.value);
            break;
    }
    
}

function cancella() {
    primoNumero = 0;
    operatore = "";
    _txtDisplay.value = "";
}

function generaNumero(a, b) { //estremo superiore escluso
    let ris = Math.floor((b-a) * Math.random()) + a;

    return ris;
}