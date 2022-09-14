"use strict"

const RIGHE = 29;
const COLONNE = 40;

const PRIMA_RIGA = 1;
const PRIMA_COLONNA = 1;
const ULTIMA_RIGA = RIGHE-2;
const ULTIMA_COLONNA = COLONNE-2;
let riga = 1
let col = 1
let cont = 0
let prima = true
let dxDown = false
let sxDown = false
let dxUp = false
let sxUp = false
let n1 = false
let finito = false

window.onload = function(){
    let _wrapper = document.getElementById("wrapper")
    for(let i = 0;i < RIGHE;i++)
    {
        for(let j = 0;j < COLONNE;j++)
        {
            if(i == 0 || j == 0 || i == RIGHE - 1|| j == COLONNE - 1)
            {
                let _div = document.createElement("div")
                _wrapper.appendChild(_div)
                _div.classList.add("cella")
                _div.style.backgroundColor = "rgb(66,66,66)"
                _div.id = "div-" + i + "-" + j
            }
            else
            {
                let _div = document.createElement("div")
                _wrapper.appendChild(_div)
                _div.classList.add("cella")
                _div.style.backgroundColor = "white"
                _div.id = "div-" + i + "-" + j
                _div.style.borderRadius = "30px"
            }
        }
    }
    let pal = document.getElementById("div-" +  riga + "-" + col)
    var timerID = setInterval(pallina,1)
    function pallina(){
        if(prima == true)
        {
            pal.style.backgroundColor = "white"
            riga++
            col++
            if(riga == (ULTIMA_RIGA + 1))
            {
                riga--
                col--
                prima = false
                dxUp = true
            }
            else
            {
                pal = document.getElementById("div-" +  riga + "-" + col)
                pal.style.backgroundColor = "red"
            }
        }
        else if(riga == ULTIMA_RIGA)
        {
            if(dxDown == true)
            {
                dxUp = true
                dxDown = false
            }
            else if(sxDown == true)
            {
                sxUp = true
                sxDown = false
            }
        }
        else if(riga == PRIMA_RIGA)
        {
            if(sxUp == true)
            {
                sxUp = false
                sxDown = true
            }
            else if(dxUp == true)
            {
                dxUp = false
                dxDown = true
            }
        }
        else if(col == ULTIMA_COLONNA)
        {
            if(dxUp == true)
            {
                dxUp = false
                sxUp = true
            }
            else if(dxDown == true)
            {
                dxDown = false
                sxDown = true
            }
        }
        else if(col == PRIMA_COLONNA)
        {
            if(sxUp == true)
            {
                sxUp = false
                dxUp = true
            }
            else if(sxDown == true)
            {
                sxDown = false
                dxDown = true
            }
        }


        if(dxUp == true && finito == false)
        {
            pal.style.backgroundColor = "white"
            riga--
            col++
            pal = document.getElementById("div-" +  riga + "-" + col)
            pal.style.backgroundColor = "red"
        }
        if(sxDown == true && finito == false)
        {
            pal.style.backgroundColor = "white"
            riga++
            col--
            pal = document.getElementById("div-" +  riga + "-" + col)
            pal.style.backgroundColor = "red"
        }
        if(sxUp == true && finito == false)
        {
            pal.style.backgroundColor = "white"
            riga--
            col--
            pal = document.getElementById("div-" +  riga + "-" + col)
            pal.style.backgroundColor = "red"
        }
        if(dxDown == true && finito == false)
        {
            pal.style.backgroundColor = "white"
            riga++
            col++
            pal = document.getElementById("div-" +  riga + "-" + col)
            pal.style.backgroundColor = "red"
        }

        if((riga == 1 && col == 1) || (riga == ULTIMA_RIGA && col == 1) || (riga == ULTIMA_RIGA && col == ULTIMA_COLONNA) || (riga == 1 && col == ULTIMA_COLONNA))
        {
            finito = true
        }
    }
}
