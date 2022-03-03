

let row = 100;
let col = 26;

let addressColCont = document.querySelector(".address-col-cont");
let addressRowCont = document.querySelector(".address-row-cont");

for(let i = 0; i < row; i++)
{

    let addressCol = document.createElement("div");
    addressCol.innerText = i+1;
    addressCol.setAttribute("class", "address-col");
    addressColCont.appendChild(addressCol);
}

