
let row = 100;
let col = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");

let addressbar = document.querySelector(".address-bar");

let gridCells = document.querySelector(".cells-cont");

for(let i = 0; i < row; i++)
{

    let addressCol = document.createElement("div");
    addressCol.innerText = i+1;
    addressCol.setAttribute("class", "address-col");
    addressColCont.appendChild(addressCol);
}

for(let i = 0; i < col; i++)
{

    let addressCol = document.createElement("div");
    addressCol.innerText = String.fromCharCode(65+i);
    addressCol.setAttribute("class", "address-row");
    addressRowCont.appendChild(addressCol);
}


for(let i = 0; i < row; i++)
{
    let rowCont = document.createElement("div");
    rowCont.setAttribute("class", "cell-cont");
    for(let j = 0; j < col; j++)
    {
        let cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.setAttribute("contenteditable", "true");

        cell.setAttribute("spellcheck", "false");

        // Attributes for cell and storage identification
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        rowCont.appendChild(cell);

        addListenerForAddressBarDisplay(cell, i, j);
    }

    gridCells.appendChild(rowCont);
}

// marked selected row col
function selectedRowCol(i,j)
{
    let cellCol = document.querySelectorAll(".address-row");
    let cellRow = document.querySelectorAll(".address-col");

    cellCol[j].classList.add("cellCol");

    for(let c = 0; c < col; c++){
        cellCol[c].classList.remove("cellCol");
    }
    
    cellCol[j].classList.add("cellCol");

    for(let r = 0; r < row; r++){
        cellRow[r].classList.remove("cellCol");
    }
    cellRow[i].classList.add("cellCol");
}

function addListenerForAddressBarDisplay(cell, i, j)
{
    cell.addEventListener("click", (e) => {
        let rowID = i+1;
        let colID = String.fromCharCode(j+65);

        addressbar.value = `${colID}${rowID}`;

        selectedRowCol(i,j);

    })
}


// By default click on first cell
let firstCell = document.querySelector(".cell");
firstCell.click();

