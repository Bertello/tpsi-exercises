const DIM = 10;
let livello = 0;

window.onload= function(){
	let _wrapper = document.getElementById("wrapper");
	for(let i = 0;i < 10;i++)
    {
        for(let j = 0;j < 10;j++)
        {
            let _div = document.createElement("div")
            _wrapper.appendChild(_div)
            _div.classList.add("cella")
            _div.id = "div-" + i + "-" + j
        }
    }
	let timerID = setInterval(visualizza, 500)
    
    function visualizza() {
        reset()
        for(let i = 0; i < (DIM - (livello * 2));i++)
        {
            let div1 = document.getElementById("div-" + livello + "-" + (i + livello))
            div1.style.backgroundColor = "red"
            div1 = document.getElementById("div-" + (i + livello) + "-" + livello)
            div1.style.backgroundColor = "red"
            div1 = document.getElementById("div-" + (DIM - (livello + 1)) + "-" + (i + livello))
            div1.style.backgroundColor = "red"
            div1 = document.getElementById("div-" + (i + livello) + "-" + (DIM - (livello + 1)))
            div1.style.backgroundColor = "red"
        }
        livello++
        if(livello == 5)
        livello = 0
    }
    function reset(){
        for(let i = 0;i < 10;i++)
        {
            for(let j = 0;j < 10;j++)
            {
                div1 = document.getElementById("div-" + i + "-" + j)
                div1.style.backgroundColor = "rgb(200,200,200)"
            }
        }
    }
}	



function generaNumero(min, max){
    let rnd = Math.floor((max - min + 1) * Math.random()) + min;   
    return rnd;
}