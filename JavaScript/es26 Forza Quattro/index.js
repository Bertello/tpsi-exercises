"use strict";


const RIGHE=6;
const COLONNE=7;
const GREY = "rgb(127, 127, 127)";
let trn=1;

window.onload=function(){
    let _wrapper=document.getElementById("wrapper");
    let _nextPlayer=document.getElementById("nextPlayer");

    _nextPlayer.classList.add("pedina");
    _nextPlayer.style.backgroundColor="yellow";
    for(let i=0;i<RIGHE;i++)
    {
        for(let j=0;j<COLONNE;j++)
        {
            let _div=document.createElement("div");
            _div.classList.add("pedina");
            _wrapper.appendChild(_div);
            _div.id=`div-${i}-${j}`;
            _div.addEventListener("click", turno);
            _div.style.backgroundColor = GREY

        }
    }

    function turno(){
        let aus=this.id.split("-");
        let r=aus[1];
        let c=aus[2];
        let _cellaBase=document.getElementById(`div-${RIGHE - (RIGHE - r - 1)}-${c}`);
        if(r==RIGHE-1 || _cellaBase.style.backgroundColor!=GREY)
        {
            if(trn==1)
            {
                 this.style.backgroundColor=  _nextPlayer.style.backgroundColor;
                 _nextPlayer.style.backgroundColor="red";
                 trn=2;
                 this.removeEventListener("click",turno)
            }
            else
            {
                this.style.backgroundColor=  _nextPlayer.style.backgroundColor;
                _nextPlayer.style.backgroundColor="yellow";
                trn=1;
                this.removeEventListener("click",turno)
            }
        }
        vincita()
    }
    function vincita(){
        let _img
        let _imgSucc
        let cont = 1;
        for(let i = 0;i < RIGHE;i++)
        {
            for(let j = 0;j < COLONNE;j++)
            {
                _img = document.getElementById(`div-${i}-${j}`)
                if(j != COLONNE - 1 )
                _imgSucc = document.getElementById(`div-${i}-${j + 1}`)
                else
                _imgSucc = _imgSucc = document.getElementById(`div-${i}-${j - 3}`)
                if(_img.style.backgroundColor == _imgSucc.style.backgroundColor && _img.style.backgroundColor != GREY)
                cont++;
                else
                cont = 1
                if(cont == 4)
                {
                    alert("Hai vinto")
                    disabilita()
                }
            }
            cont = 1
        }
        cont = 1
        _img = ""
        _imgSucc = ""
        for(let j = 0;j < COLONNE;j++)
        {
            for(let i = 0;i < RIGHE;i++)
            {
                _img = document.getElementById(`div-${i}-${j}`)
                if(i != RIGHE - 1 )
                _imgSucc = document.getElementById(`div-${i + 1}-${j}`)
                else
                _imgSucc = _imgSucc = document.getElementById(`div-${i - 3}-${j}`)
                if(_img.style.backgroundColor == _imgSucc.style.backgroundColor && _img.style.backgroundColor != GREY)
                cont++;
                else
                cont = 1
                if(cont == 4)
                {
                    alert("Hai vinto")
                    disabilita()
                }
            }
            cont = 1;
        }
    }
    function disabilita(){
		for(let i = 0; i < RIGHE;i++)
		{
			for(let j = 0;j < COLONNE;j++)
			{
				let _cancella = document.getElementById(`div-${i}-${j}`)
				_cancella.removeEventListener("click",turno)
			}
		}
	}
}