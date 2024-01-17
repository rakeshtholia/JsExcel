let rows = 100;
let cols = 26;

let cellsCont = document.querySelector(".cells-cont");
let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let addressBar = document.getElementById("address");

function addEventAddressCalculation(cell,j,i) {
    cell.addEventListener("click", function(e) {
        addressBar.value = `${i}${j}`;
    })
}

//adding cell in each row
function addCells(divElement,j) {
    for (let i=0;i < cols; i++) {
        let cell = document.createElement("div");
        var alpha = String.fromCharCode(65 + i);
        cell.setAttribute("class" , "cell");
        cell.setAttribute("contenteditable", "true");
        divElement.appendChild(cell);
        addEventAddressCalculation(cell,j,alpha);
    }
}

//adding rows
for (let i = 0; i < rows; i++) {
    let addressCol = document.createElement("div");
    addressCol.setAttribute("class" , "address-col");
    addressCol.innerText = i+1;
    addressColCont.appendChild(addressCol);
}

//adding columns
for (let i=0;i < cols; i++) {
    let addressRow = document.createElement("div");
    addressRow.setAttribute("class" , "address-row");
    var alpha = String.fromCharCode(65 + i);
    addressRow.innerText = alpha;
    addressRowCont.appendChild(addressRow);
}

//Adding cells in grid
for (let i = 0; i < rows; i++) {
    let rowCont = document.createElement("div");
    addCells(rowCont,i);
    rowCont.setAttribute("class" , "row-cont");
    cellsCont.appendChild(rowCont);
}

//Adding cells in each row
