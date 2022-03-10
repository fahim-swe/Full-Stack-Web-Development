


// Storage
let sheetBD = [];

for(let i = 0; i < row; i++)
{
    let sheetRow = [];
    for(let j = 0; j < col; j++)
    {
        let cellProp = {
            bold : false, 
            italic: false,
            underline: false,
            alignment : "left",
            fontFamily : "monospace",
            fontSize : "14",
            fontColor : '#000',
            BGcolor : '#fff',  // just for indication
            value: "",
            formula: "",
            children: []
        }
        sheetRow.push(cellProp);
    }
    sheetBD.push(sheetRow);
}



// Selector for cell properties
let bold = document.querySelector(".bold");
let italic = document.querySelector(".italic");
let underline = document.querySelector(".underline");
let alignment = document.querySelectorAll(".alignment");
let fontSize = document.querySelector(".font-size-prop");
let fontFamily = document.querySelector(".font-family-prop");
let fontColor = document.querySelector(".font-color-prop");
let BGcolor = document.querySelector(".BGcolor-prop");
let leftAlign = document.querySelector(".left");
let centerAlign = document.querySelector(".center");
let rightAlign = document.querySelector(".right");

let formulaBar = document.querySelector(".formula-bar");

let cells = document.querySelectorAll(".cell");

let fontColorBg = document.querySelector(".bg-color");
let cellColorBg = document.querySelector(".bg-bg");


let activeColorProp = "#8c95a3";
let inactiveColorProp = "#ecf0f1";

// Attach property listeners
bold.addEventListener("click", (e) => {

    let [cell, cellProp] = activecell(addressbar.value);

    // Modification
    cellProp.bold = !cellProp.bold; // data change
    cell.style.fontWeight = cellProp.bold ? "bold" : "normal";

    bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
})

italic.addEventListener("click", (e) => {

    let [cell, cellProp] = activecell(addressbar.value);

    // Modification
    cellProp.italic = !cellProp.italic; // data change
    cell.style.fontStyle = cellProp.italic ? "italic" : "normal";

    italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
})

underline.addEventListener("click", (e) => {

    let [cell, cellProp] = activecell(addressbar.value);

    // Modification
    cellProp.underline = !cellProp.underline; // data change
    cell.style.textDecoration = cellProp.underline ? "underline" : "none";

    underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
})


fontSize.addEventListener("change", (e) => {

    // console.log(fontSize.value);
    let [cell, cellProp] = activecell(addressbar.value);

    cellProp.fontSize = fontSize.value; // data change
    
    console.log(cellProp.fontSize);
    cell.style.fontSize = cellProp.fontSize + "px";
    fontSize.value = cellProp.fontSize;
})



fontFamily.addEventListener("change", (e) => {

    // console.log(fontSize.value);
    let [cell, cellProp] = activecell(addressbar.value);

    cellProp.fontFamily = fontFamily.value;
    cell.style.fontFamily = cellProp.fontFamily;
    fontFamily.value = cellProp.fontFamily;
})


fontColor.addEventListener("change", (e)=> {
    // console.log(fontSize.value);
    let [cell, cellProp] = activecell(addressbar.value);

    cellProp.fontColor = fontColor.value;
    cell.style.color = cellProp.fontColor;
    fontColor.value = cellProp.fontColor;

    
    fontColorBg.style.color = cellProp.fontColor;
})


BGcolor.addEventListener("change", (e)=> {
    // console.log(fontSize.value);
    let [cell, cellProp] = activecell(addressbar.value);

    cellProp.BGcolor = BGcolor.value;
    cell.style.backgroundColor = cellProp.BGcolor;
    BGcolor.value = cellProp.BGcolor;

    cellColorBg.style.backgroundColor = cellProp.BGcolor;
})

alignment.forEach((alignElem) => {
    alignElem.addEventListener("click", (e) =>{
        

        let [cell, cellProp] = activecell(addressbar.value);

        let alignValue = e.target.classList[0];
        
        cellProp.alignment = alignValue;
        cell.style.textAlign = alignValue;

        switch(alignValue)
        {
            case "left": 
                leftAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "center":
                centerAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
            case "right":
                rightAlign.style.backgroundColor = activeColorProp;
                centerAlign.style.backgroundColor = inactiveColorProp;
                rightAlign.style.backgroundColor = inactiveColorProp;
                break;
        }

    })
})


cells.forEach((cell) => {
    
    cell.addEventListener("click", (e)=> {
        // console.log(cell.attributes.rid.value);


        let rid = cell.attributes.rid.value;
        let cid = cell.attributes.cid.value;

        let cellProp = sheetBD[rid][cid];
        
        
        // Work on cells
        cell.style.fontWeight = cellProp.bold ? "bold" : "normal";
        cell.style.fontStyle =  cellProp.italic ? "italic" : "normal";
        cell.style.textDecoration = cellProp.underline ? "underline" : "none";
        cell.style.fontSize = cellProp.fontSize + "px";
        cell.style.fontFamily = cellProp.fontFamily;
        cell.style.color = cellProp.fontColor;
        cell.style.backgroundColor = cellProp.BGcolor;
        cell.style.textAlign =  cellProp.alignment;

        formulaBar.value = cellProp.formula;

        

        // Work on sell Actions
        bold.style.backgroundColor = cellProp.bold ? activeColorProp : inactiveColorProp;
        italic.style.backgroundColor = cellProp.italic ? activeColorProp : inactiveColorProp;
        underline.style.backgroundColor = cellProp.underline ? activeColorProp : inactiveColorProp;
        
        fontFamily.value = cellProp.fontFamily;
        fontSize.value = cellProp.fontSize;

        fontColorBg.style.color = cellProp.fontColor;
        cellColorBg.style.backgroundColor = cellProp.BGcolor;

    })

    // Store value in SheetB
    cell.addEventListener("blur", (e) => {
        // console.log(cell.innerText);

        
        let rid = cell.attributes.rid.value;
        let cid = cell.attributes.cid.value;
        sheetBD[rid][cid].value = cell.innerText;

        // console.log(sheetBD[rid][cid]);

        
    })
})



function setDefualt()
{
    let [cell, cellProp] = activecell(addressbar.value);

}

function activecell(address)
{
    let [rid, cid] = decodeRIDCIDFromAddress(address);

    // Access cell & storage 
    let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
    let cellProp = sheetBD[rid][cid];
    return [cell, cellProp];
    
}




function decodeRIDCIDFromAddress(address)
{
    
    let rid = Number(address.slice(1)-1);
    let cid = Number(address.charCodeAt(0)-65);

    return [rid, cid];
}   


