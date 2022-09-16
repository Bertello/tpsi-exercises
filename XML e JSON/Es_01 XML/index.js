'use strict'
let NomeCol
let TextCol
function crea() {
    localStorage.setItem("bookstore_xml", bookstore);
    alert("Dati salvati correttamente nel localStorage");
}
document.onload=function(){
    
}


function visualizza() {
    NomeCol=["2-category","3-lang","1-title","4-author","5-year","6-price"]
    TextCol=new Array(6)
    for(let i=0;i<6;i++)
    {
        TextCol[i]=""
    }
    // lettura della stringa dal localStorage
    let xml = localStorage.getItem("bookstore_xml");
    console.log(xml);
    let parser=new DOMParser();
    let xmlDoc=parser.parseFromString(xml,"text/xml")
    let root= xmlDoc.documentElement
    console.log("children:",root.children.length)
    console.log("childNodes: "+root.childNodes.length)
    let tabLibri=document.getElementById("tabLibri")
    
    for(let i=0;i<root.children.length;i++)
    {
        NomeCol=["2-category","3-lang","1-title","4-author","5-year","6-price"]
        let secNod=root.children[i]
        let indVet=0
        for(let i=0;i<6;i++)
        {
            TextCol[i]=""
        }
        console.log(secNod.getAttribute("category"))
        if(secNod.hasAttribute("category"))
            TextCol[indVet]=secNod.getAttribute("category")
        else
            TextCol[indVet]="null"
        indVet++
        if(secNod.children[0].hasAttribute("lang"))
            TextCol[indVet]=secNod.children[0].getAttribute("lang")
        else
            TextCol[indVet]="null"
        indVet++
        for(let j=0;j<secNod.children.length;j++)
        {
            if(secNod.children[j].nodeName==NomeCol[indVet].split('-')[1])
            {
                TextCol[indVet]+=secNod.children[j].textContent+" "
                if(!(indVet!=5 && secNod.children[j].nodeName==secNod.children[j+1].nodeName))
                    indVet++
            }
            else
            {
                TextCol[indVet]="null"
                indVet++
                j--
            }
            
        }
        ordinaVet(NomeCol,TextCol)
        let tr=document.createElement("tr")
        tr.innerHTML=""
        for(let j=0;j<indVet;j++)
        {
            tr.innerHTML+="<td>"+TextCol[j]+"</td>"
        }
        tabLibri.appendChild(tr)
        
    }
    
}
function ordinaVet( NomeCol, TextCol)
{
    for(let i=0;i<NomeCol.length-1;i++)
    {
        let posmin=i
        for(let j=i+1;j<NomeCol.length;j++)
            if(NomeCol[posmin]>NomeCol[j])
                posmin=j
        if(posmin!=i)
        {
            let aus=NomeCol[i]
            NomeCol[i]=NomeCol[posmin]
            NomeCol[posmin]=aus
            aus=TextCol[i]
            TextCol[i]=TextCol[posmin]
            TextCol[posmin]=aus
        }
    }
}