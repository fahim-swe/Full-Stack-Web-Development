

// Evalute formula f(x) calc
formulaBar.addEventListener("keydown", (e)=>{

    let inputFormula = formulaBar.value;
    if(e.key == "Enter" && inputFormula)
    {
        let [cell, cellProp] = activecell(addressbar.value);

        if(cellProp.formula != inputFormula){
            removeChildFromParent(cellProp.formula);
        }

        // console.log(evaluateFormula(formulaBar.value));
        let evaluatedValue = evaluateFormula(inputFormula);

        // To update UI and cellProp in SheetDB
        setCellUIAndCellProp(evaluatedValue, inputFormula);
        addChildToParent(inputFormula); 

        // update depended children
        updateChildrenCells(addressbar.value)
        
    }
})


function updateChildrenCells(parentAddress)
{
    let [cell, cellProp] = activecell(parentAddress);

    let child = cellProp.children;

    for(let i = 0; i < child.length; i++){
        console.log(child[i]);
        updateChildrenCells(child[i]);
    }
}

function removeChildFromParent(inputFormula)
{
    let child = addressbar.value;

    let encodedFormula = inputFormula.split(" ");

    for(let i = 0; i < encodedFormula.length; i++){
        let asciiValue = encodedFormula[i].charCodeAt(0);

        if(asciiValue >= 65 && asciiValue <= 90){
            
            let [cell, cellProp] = activecell(encodedFormula[i]);
            
            let index = cellProp.children.indexOf(child);
            // console.log(cellProp);
            // console.log(cellProp.children);
            cellProp.children.splice(index, 1);
            // console.log(cellProp.children);
        }
    }
}

function addChildToParent(inputFormula)
{
    let child = addressbar.value;

    let encodedFormula = inputFormula.split(" ");

    for(let i = 0; i < encodedFormula.length; i++){
        let asciiValue = encodedFormula[i].charCodeAt(0);

        if(asciiValue >= 65 && asciiValue <= 90){
            
            let [cell, cellProp] = activecell(encodedFormula[i]);
            
            cellProp.children.push(child);
        }
    }
}





// Expression formula evaluation 
function evaluateFormula(formula){

    
    let encodedFormula = formula.split(" ");

    for(let i = 0; i < encodedFormula.length; i++){
        let asciiValue = encodedFormula[i].charCodeAt(0);

        if(asciiValue >= 65 && asciiValue <= 90){
            
            let [cell, cellProp] = activecell(encodedFormula[i]);
            
            encodedFormula[i] = cellProp.value;
        }
    }

    let decodedFormula = encodedFormula.join(" ");
    return eval(decodedFormula);
}

// calc expression and store formula in sheetBD
function setCellUIAndCellProp(evaluatedValue, formula)
{
    let [cell, cellProp] = activecell(addressbar.value);

    cell.innerText = evaluatedValue;
    cellProp.value = evaluatedValue;
    cellProp.formula = formula;
    // console.log(cellProp);

}