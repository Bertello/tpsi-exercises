"use strict";


window.onload= function(){
	let _data1 = document.getElementById("txtData1");
	let _data2 = document.getElementById("txtData2");
	let _button = document.getElementsByTagName("button")[0];
	let _log = document.getElementById("log");
	
    _data2.addEventListener("input",function() {
	    _button.disabled = false
	})
	
	_button.addEventListener("click", function(){
        let data1 = moment(_data1.value)
		let data2 = moment(_data2.value)
		_log.innerHTML += data1.format() + "<br>"
		_log.innerHTML += data2.format() + "<br>"
	})
	
}