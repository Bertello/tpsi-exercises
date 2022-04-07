"use strict"
const dim =  10;
window.onload = function(){
    let _wrapper = this.document.getElementById("wrapper")
	for(let i = 0; i < dim;i++)
    {
		for(let j = 0;j < dim;j++)
		{
			let _button = document.createElement("button")
			_button.classList.add("btnStyle")
			_button.id = "btn -" + i + "-"+j
			_button.innerHTML = "&nbsp"
			_wrapper.appendChild(_button)
			_button.addEventListener("click",buttonclick)
		}
	}
    function buttonclick(){
		let aus = this.id.split("-")
		let i = aus[1]
		let j = aus[2]
		this.disabled = true
		this.innerHTML = i + "-" + j
		this.style.backgroundColor = "red"
	}
}


function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}