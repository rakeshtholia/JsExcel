let rows = 100;
let cols = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");

for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class" , "address-col");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}

// for(let i=90;i>=65;i--) {
//     let cellsCol = document.createElement("div");
//     console.log(cellsCol);
//     cellsCol.setAttribute("class", "cells-col");
//     cellsCol.innerText = String.fromCharCode(i);
//     cellsCont.insertBefore(cellsCol,document.querySelector(".address-row-cont").nextSibling);
// }

for (let i=0;i < cols; i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class" , "address-row");
    addressRow.innerText = i+1;
    addressRowCont.appendChild(addressRow);
}