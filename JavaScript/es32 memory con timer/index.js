"use strict";

window.onload = function () {
	let DIM
	let _listbox = document.getElementsByTagName("select")[0]
	let _minuti = document.getElementById("minuti")
	let _secondi = document.getElementById("secondi")
	let timerID = setInterval(visualizza,1000)
	let _wrapper = document.getElementById("wrapper")
	_listbox.addEventListener("change",listbox1)
	_listbox.selectedIndex = -1
	_listbox[1].disabled = true
	let click = 0
	let num
	let _div1
	let _div2


    function listbox1(){
		let cnt = 0
		if(this.value == 4)
	    {
		    DIM = 4
			_wrapper.style.width = "260px"
			_wrapper.style.height = "260px"
		}
		else
		{
		    DIM = 6
			_wrapper.style.width = "370px"
			_wrapper.style.height = "370px"
		}
		let vet = []
		let vet1 = []
		for(let i = 0;i < ((DIM * DIM) / 2);i++)
		{
            vet[i] = i + 1
			vet1[i] = i + 1
		}
		for(let i = 0;i< DIM;i++)
		{
			for(let j = 0;j < DIM;j++)
			{
				let _div = document.createElement("div")
				if(cnt % 2 == 0)
				{
					_wrapper.appendChild(_div)
					let pos = generaNumero(0,vet.length)
					_div.innerHTML = vet[pos]
					vet.splice(pos,1)
				}
				else
				{
					_wrapper.appendChild(_div)
				    let pos1 = generaNumero(0,vet1.length)
                    _div.innerHTML = vet1[pos1]
				    vet1.splice(pos1,1)
				}
                cnt++
				_div.addEventListener("click", vis)
				_div.id = "div-" + i + "-" + j
			}
		}
	}

    function vis(){
		click++
		this.style.backgroundColor = "red"
		if(click == 2)
		{
			setTimeout(colora,500)
			_div2 = this
			for(let i = 0;i< DIM;i++)
		    {
			    for(let j = 0;j < DIM;j++)
			    {
				    let _div = document.getElementById("div-" + i + "-" + j)
				    _div.removeEventListener("click",vis)
			    }
		    }
		}
		else
		{
            num = this.innerHTML
			_div1 = this
		}
	}

    function colora(){
		_div2.style.backgroundColor = "rgb(200,200,200)"
		_div1.style.backgroundColor = "rgb(200,200,200)"
		if(num == _div2.innerHTML)
		{
			_div2.style.backgroundColor = "blue"
			_div1.style.backgroundColor = "blue"
			click = 0;
			controllaWin()
		}
		else
		{
			_div2.style.backgroundColor = "rgb(200,200,200)"
			_div1.style.backgroundColor = "rgb(200,200,200)"
			click = 0
		}
		for(let i = 0;i< DIM;i++)
		{
			for(let j = 0;j < DIM;j++)
			{
				let _div = document.getElementById("div-" + i + "-" + j)
				if(_div.style.backgroundColor != "blue")
				_div.addEventListener("click",vis)
			}
		}
	}

	function visualizza(){
		let aus = parseInt(_secondi.innerHTML) + 1
		let aus1 = parseInt(_minuti.innerHTML) + 1
		if(aus < 10)
		_secondi.innerHTML = '0' + aus
		else
		_secondi.innerHTML = aus
		if(aus == 59)
		{
			_secondi.innerHTML = "00"
			if(aus1 < 10)
		    _minuti.innerHTML = '0' + aus1
			else
			_minuti.innerHTML = aus1
		}
	}

	function controllaWin(){
		let vittoria = true;
		for(let i = 0;i< DIM;i++)
		{
			for(let j = 0;j < DIM;j++)
			{
				let _div = document.getElementById("div-" + i + "-" + j)
				if(_div.style.backgroundColor != "blue")
				vittoria = false
			}
		}
		if(vittoria == true)
		alert("Hai vinto!")
	}
}


function generaNumero(min, max) {
	let rnd = Math.floor((max - min) * Math.random()) + min;
	return rnd;
}