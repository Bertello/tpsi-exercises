"use strict"

const COLORE_SFONDO = "rgb(220, 220, 220)"
const COLORE_TESTO  = "rgb(100, 100, 100)"

//let vet1 = [7, 12, 2, 3, 9,14, 5, 6,11]
//let vet2 = [2, 13, 5,16, 6, 1,10, 9, 4]
let vet1 = []
let vet2 = []

window.onload = function(){
    //_totale.innerHTML = 0
    let ind = 0
    let _wrapper = document.getElementById("wrapper")
    let _header = document.getElementById("header")
    let _select = document.getElementsByTagName("select")
    let _ris =  document.getElementById("ris")
    let num
    for(let i = 4; i < 10;i++)
    {
        let _option = document.createElement("option")
        _select[0].appendChild(_option)
        _select[0].selectedIndex = - 1
        _option.value = i
        _option.id = "option-" + (i - 4)
        _option.innerHTML = i + "*" + i
        _select[0].addEventListener("change",inserisci)
    }
    function inserisci(){
        if(ind != 0)
        svuota(num)
        for(let i = 0;i < 6;i++)
        {
            let _thisoption = document.getElementById("option-" + i)
            if(_thisoption.selected == true)
            num = (i + 4)
        }
         _wrapper.style.width = 50 * num + "px"
         caricaVet(num)
         for(let i = 0;i < num;i++)
         {
             for(let j = 0;j < num;j++)
             {
                 let _div = document.createElement("div")
                 _div.innerHTML = vet1[j] + vet2[i]
                 _wrapper.appendChild(_div)
                 _div.classList.add("pedina")
                 _div.id = "div-" + i + "-" + j
                 _div.addEventListener("click", controlla)
             }
         }
         _ris.innerHTML = num * 15
         ind++
    }
    function controlla() {
        let num
        this.removeEventListener("click",controlla)
        for(let i = 0;i < 6;i++)
        {
            let _thisoption = document.getElementById("option-" + i)
            if(_thisoption.selected == true)
            num = (i + 4)
        }
        let _totale = document.getElementById("totale")
        _totale.innerHTML = parseInt(_totale.innerHTML) + parseInt(this.innerHTML)
         let aus = this.id.split("-")
         let r = parseInt(aus[1])
         let c = parseInt(aus[2])
         for(let i = 0;i < num;i++)
         {
             let _div1 = document.getElementById("div-" + i + "-" + c)
             _div1.style.backgroundColor = COLORE_SFONDO
             _div1.style.color = COLORE_TESTO
             _div1.removeEventListener("click",controlla)
         }
         for(let j = 0;j < num;j++)
         {
            let _div1 = document.getElementById("div-" + r + "-" + j)
            _div1.style.backgroundColor = COLORE_SFONDO
            _div1.style.color = COLORE_TESTO
            _div1.removeEventListener("click",controlla)
         }
         this.style.backgroundColor = "blue"
         this.style.color = "white"
    }
    function svuota(num){
        let _totale = document.getElementById("totale")
        _totale.innerHTML = "0"
        let _ris = document.getElementById("ris")
        _ris.innerHTML = "0"
        for(let i = 0;i < num;i++)
         {
             for(let j = 0;j < num;j++)
             {
                 let _div = document.getElementById("div-" + i + "-" + j)
                 _wrapper.removeChild(_div)
             }
         }
    }
    function caricaVet(num){
        let v = []
       let somma = 0
       let ris = num * 15
       do
       {
            somma = 0
            for(let i = 1;i < 17;i++)
            v[i - 1] = i
            for(let i = 0;i < num;i++)
            {
               let pos = generaNumero(0,v.length)
               vet1[i] = v[pos]
               v.splice(pos,1)
               somma+= vet1[i]
            }
            for(let i = 1;i < 17;i++)
            v[i - 1] = i
            for(let i = 0;i < num;i++)
            {
               let pos = generaNumero(0,v.length)
               vet2[i] = v[pos]
               v.splice(pos,1)
               somma += vet2[i]
            }
       }while(somma != ris)
       console.log(vet1)
       console.log(vet2)
    }
}
function generaNumero(a, b) {
	//genera un numero casuale tra a e b, estremo superiore escluso
	let ris =  Math.floor((b - a)*Math.random()) + a
	return ris
}


