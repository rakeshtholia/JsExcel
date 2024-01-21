let rows = 100;
let cols = 26;

var propObj = {};

//creating an object for functions
var addressObj = {
    font: "monospace",
    size: "14",
    bold: false,
    italic: false,
    underline: false,
    leftalign: false,
    rightalign: false,
    centeralign: false,
    colorfill : false
}

let cellsCont = document.querySelector(".cells-cont");
let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");
let addressBar = document.getElementById("address");

function addEventAddressCalculation(cell,j,i) {
    cell.addEventListener("click", function(e) {
        addressBar.value = `${i}${j+1}`;
    })
}

//adding cell in each row
function addCells(divElement,j) {
    for (let i=0;i < cols; i++) {
        let cell = document.createElement("div");
        var alpha = String.fromCharCode(65 + i);
        cell.setAttribute("class" , "cell");
        cell.setAttribute("contenteditable", "true");
        cell.setAttribute("onClick","populate()");
        divElement.appendChild(cell);
        addEventAddressCalculation(cell,j,alpha);
        var key = `${alpha}${j+1}`;
        propObj[key] = addressObj;
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

function addClass(element,key) {
    //popoulate
    var Objvalue = propObj.key;
    var location = document.getElementById('address').value;
    // for(var everyEntry in Objvalue) {
    //     if(everyEntry.value) {
    //         element.classList.remove('copy-active');
    //         propObj[location].key = false;
    //     }
    //     else {
    //         element.classList.add('copy-active');
    //         propObj[location].key = true;
    //     }
    // }
}

// if(element.classList.contains('copy-active')) {
//     element.classList.remove('copy-active');
//     propObj[location].key = false;
// }
// else {
//     element.classList.add('copy-active');
//     propObj[location].key = true;
// }

//populate -> cell click
function populate() {
    var location = document.getElementById('address').value;

    var Objvalue = propObj[location];

    for(var everyEntry in Objvalue) {
        if(everyEntry == true) {
            element.classList.add('copy-active');
        }
    }
}
//Update   -> Porperties click

