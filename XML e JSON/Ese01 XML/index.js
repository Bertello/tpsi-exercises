'use strict'

function crea() {
    localStorage.setItem("bookstore_xml", bookstore);
    alert("Dati salvati correttamente nel localStorage")
}

function visualizza() {
    // lettura della stringa dal localStorage
    let xml = localStorage.getItem("bookstore_xml");
    console.log(xml);
    var parser=new DOMParser();
    var xmlDoc=parser.parseFromString(xml,"text/xml");
    var root = xmlDoc.documentElement;
    console.log(("Children: "), root.children.length);
    console.log(("ChildNods: "), root.children.length);
    for(let i = 0;i < root.children.length;i++)
    {

    }

}