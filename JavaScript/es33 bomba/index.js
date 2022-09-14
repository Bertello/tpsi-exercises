'use strict'
const DIM = 10;
const GRIGIO = "rgb(127, 127, 127)";
const BLU = "rgb(0, 0, 255)";
const ROSSO = "rgb(255, 0, 0)";


window.onload=function(){
    let cont = 0;
    let bomba
    let x,y
    let click = 0;
    let _wrapper = document.getElementById("wrapper")
    let _table = document.createElement("table")
    _wrapper.appendChild(_table)
    for(let i = 0;i < 10;i++)
    {
        let _tr = document.createElement("tr")
        _table.appendChild(_tr)
        for(let j = 0;j < 10;j++)
        {
            let _td = document.createElement("td")
            _tr.appendChild(_td)
            _td.classList.add("puls")
            _td.id = "td-" + i + "-" + j
            _td.style.backgroundColor = GRIGIO
            _td.addEventListener("click",colora)
        }
    }
    var timerID=setInterval(visualizza, 250);

    function colora(){
        if(this.style.backgroundColor == GRIGIO)
        this.style.backgroundColor = BLU
        else if(this.style.backgroundColor == BLU)
        this.style.backgroundColor = GRIGIO 
        else if(this.style.backgroundColor == ROSSO)
        alert("Hai perso")
    }
    function visualizza(){
        let bomba1
        if(click == 0)
        {
            let k = generaNumero(0,10)
            let f = generaNumero(0,10)
            bomba = document.getElementById("td-" + k + "-" + f)
            bomba.style.backgroundColor = ROSSO
        }
        else
        {
            let vet = bomba.id.split('-')
            x = parseInt(vet[1])
            y = parseInt(vet[2])
            let cas = generaNumero(0,4)
            if(cas == 0 && x != 0)
            {
                bomba1 = document.getElementById("td-" + (x - 1) + "-" + y)
                if(bomba1.style.backgroundColor != BLU)
                {
                    bomba.style.backgroundColor = GRIGIO
                    bomba = document.getElementById("td-" + (x - 1) + "-" + y)
                    bomba.style.backgroundColor = ROSSO
                    cont = 0
                }
                else 
                cont++  
            }
            else if( x == 0)
            cont++
            if(cas == 1 && x != 9)
            {
                bomba1 = document.getElementById("td-" + (x + 1) + "-" + y)
                if(bomba1.style.backgroundColor != BLU)
                {
                    bomba.style.backgroundColor = GRIGIO
                    bomba = document.getElementById("td-" + (x + 1) + "-" + y)
                    bomba.style.backgroundColor = ROSSO
                    cont = 0
                }
                else cont++
            }
            else if(x == 9)
            cont++
            if(cas == 2 && y != 0)
            {
                bomba1 = document.getElementById("td-" + x + "-" + (y - 1))
                if(bomba1.style.backgroundColor != BLU)
                {
                    bomba.style.backgroundColor = GRIGIO
                    bomba = document.getElementById("td-" + x + "-" + (y - 1))
                    bomba.style.backgroundColor = ROSSO
                    cont = 0
                } 
                else
                cont++
            }
            else if(y == 0)
            cont++
            if(cas == 3 && y != 9)
            {
                bomba1 = document.getElementById("td-" + x + "-" + (y + 1))
                if(bomba1.style.backgroundColor != BLU)
                {
                    bomba.style.backgroundColor = GRIGIO
                    bomba = document.getElementById("td-" + x + "-" + (y + 1))
                    bomba.style.backgroundColor = ROSSO
                    cont = 0
                } 
                else
                cont++
            }
            else if(y == 9)
            cont++
        }
        if(cont == 20)
        alert("Hai vinto")
        click++
    }
}

function generaNumero(min, max) {
    let rnd = Math.floor((max - min) * Math.random()) + min;
    return rnd;
}

