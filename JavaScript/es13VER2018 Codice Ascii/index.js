"use strict"
let _voci;
let _txtNum;
let _txtAscii
let _chkRis
let cont = 0
let _btnControlla
let vet = []


// Controllare come fare per attivare pulsante controlla
// Controllare come fare per accettare un solo carattere
window.onload = function (){
	_voci = document.getElementById("voci");
	_txtNum = document.getElementsByName("txtNum");
	_txtAscii = document.getElementsByName("txtAscii")
	_chkRis = document.getElementsByName("chkRis")
	_btnControlla = document.getElementById("btnControlla")
	_voci.selectedIndex = -1
	_btnControlla.disabled = true;
}
function check(){
	let cnt = 0;
	for(let i = 0; i < 6;i++){
		if(_txtAscii[i].value != "")
        cnt++;
	}
	if(cnt == 6)
	_btnControlla.disabled = false;
}
function genera(){
	for(let i = 0;i < 6;i++){
		_txtNum[i].value = ""
		_txtAscii[i].value = ""
		_chkRis[i].checked = false;	
	}
	_btnControlla.disabled = true;
	let value;
	let pos;
	let c;
	for(let i = 0;i < 26;i++)
	vet[i] = null;
	value = _voci.value;
    if(value == "65-90")
	{
		c = 0;
		for(let i = 65;i < 91;i++)
		{
			vet[c] = i;
			c++;
		}
         for(let i = 0;i < 6;i++)
		 {
			let j = 0;
		    pos = generaNumero(65,91)
            _txtNum[i].value = pos;
			while(vet[j] != pos && j < 26)
			j++;
			if(vet[j] == pos)
			vet.splice(j,1)
			else 
			i = i - 1
		 }
	}
	else if (value == "97-122")
	{
		c = 0;
		for(let i = 97;i < 123;i++)
		{
			vet[c] = i;
			c++;
		}
         for(let i = 0;i < 6;i++)
		 {
			let j = 0;
		    pos = generaNumero(97,123)
            _txtNum[i].value = pos;
			while(vet[j] != pos && j < 26)
			j++;
			if(vet[j] == pos)
			vet.splice(j,1)
			else
			i = i - 1
		 }
	}
	else{
		c = 0;
		for(let i = 48;i < 58;i++)
		{
			vet[c] = i;
			c++;
		}
         for(let i = 0;i < 6;i++)
		 {
			let j = 0;
		    pos = generaNumero(48,58)
            _txtNum[i].value = pos;
			while(vet[j] != pos && j < 10)
			j++;
			if(vet[j] == pos)
			vet.splice(j,1)
			else 
			i = i - 1
		 }
	}
}
function controllaN(){
	let vet = [];
    for(let i = 0;i < 6;i++)
	vet[i] = String.fromCharCode(_txtNum[i].value);
    for(let i = 0;i < 6;i++)
	{
		if(vet[i] == _txtAscii[i].value)
		{
		    _chkRis[i].checked = true;
		    cont++;
		}
	}
	if(cont == 6)
	alert("Bravissimo!")
	else if(cont == 0)
	alert("pessimo risulato")
}

function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}