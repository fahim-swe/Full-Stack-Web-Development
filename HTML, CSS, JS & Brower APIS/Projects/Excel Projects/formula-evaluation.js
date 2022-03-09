
// Evalute formula f(x) calc
formulaBar.addEventListener("keydown", (e)=>{

    let inputFormula = formulaBar.value;
    if(e.key == "Enter" && inputFormula)
    {
        // console.log(evaluateFormula(formulaBar.value));
        let evaluatedValue = evaluateFormula(inputFormula);

        // To update UI and cellProp in SheetDB
        setCellUIAndCellProp(evaluatedValue, inputFormula);
        addChildToParent(inputFormula);

        
    }
})


function addChildToParent(inputFormula)
{
    let child = addressbar.value.split(" ");

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