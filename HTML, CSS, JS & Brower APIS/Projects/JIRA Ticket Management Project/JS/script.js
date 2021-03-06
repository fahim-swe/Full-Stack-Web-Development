console.log("Hello");

let addBtn = document.querySelector(".add-btn");

let toolBoxColors = document.querySelectorAll(".color");

let allColors = document.querySelector(".all-tool-color")

let removeBtn = document.querySelector(".remove-btn");

let modalCont = document.querySelector(".modal-cont");

let mainCont = document.querySelector(".main-cont");

let textareaCont = document.querySelector(".textarea-cont");

let allPriorityColors = document.querySelectorAll(".priority-color");

let colors = ["lightpink", "lightblue", "lightgreen", "black"];
let modalPriorityColor = colors[colors.length-1];

let selectColorNote = document.querySelector(".ticket-id");


let ticketArr = [];




let addFlag= false;
let removeFlag = false;

function addMarketonToolColors()
{
    for(let i = 0; i < toolBoxColors.length; i++)
    {
        if(toolBoxColors[i].classList.contains("border")){
            toolBoxColors[i].classList.remove("border");
        }
    }
}
for(let i = 0; i < toolBoxColors.length; i++)
{
    toolBoxColors[i].addEventListener("click", (e)=>{
    
        addMarketonToolColors();
        toolBoxColors[i].classList.add("border");

        let currentToolBoxColor = toolBoxColors[i].classList[0];


        for(let i = 0; i < ticketArr.length; i++)
        {
            let arr = ticketArr[i];
            if(arr.titleColor != currentToolBoxColor){
                arr.ticketCont.style.display = "none";
            }
            else{
                arr.ticketCont.style.display = "block";
            }

            if(currentToolBoxColor == "all-tool-color"){
                arr.ticketCont.style.display = "block";
            }
        }
    })

    toolBoxColors[i].addEventListener("dblclick", (e) => {
        
        for(let i = 0; i < ticketArr.length; i++)
        {
            let arr = ticketArr[i];

            console.log(arr.ticketCont.style.display);
        }
    })
}



addBtn.addEventListener("click", (e) => {

    // Display Modal 
    // AddFlag == true (display modal)

    addFlag = !addFlag;
    if(addFlag ==true){
        modalCont.style.display = "flex";
    }
    else{
        modalCont.style.display = "none";
    }
    // Generate ticket

})


// Remove ticket 
removeBtn.addEventListener("click", (e) => {
    removeFlag = !removeFlag;

    if(removeFlag){
        removeBtn.classList.add("border");
        handleRemoval();
    }
    else{
        removeBtn.classList.remove("border");
    }
})


// Listenet for modal priority coloring
allPriorityColors.forEach((colorElem, idx) => {
    
    colorElem.addEventListener("click", (e) => {
        allPriorityColors.forEach((col, e) => {
            col.classList.remove("border");
        })

        colorElem.classList.add("border");
        modalPriorityColor = colors[idx];
    })
}) 


modalCont.addEventListener("keydown", (e) => {
    let key = e.key;

    if(key == 'Shift'){
        createTicket(modalPriorityColor, textareaCont.value, shortid());
        modalCont.style.display = "none";
        textareaCont.value = "";
    }
})


// Change Title Color on Node
selectColorNote.addEventListener("click", (e)=>{
    console.log(e);
})

function createTicket(titleColor, ticketTask, ticketID)
{
    let ticketCont = document.createElement("div");

    ticketCont.setAttribute("class", "ticket-cont clear-fix");
    ticketCont.innerHTML = `
            <div class="ticket-color ${titleColor}"></div>
            <div class="ticket-id"> #${ticketID}</div>
            <div class="task-area">
               ${ticketTask}
            </div>
            <div class="lock-icon">
                <i class="fa-solid fa-lock"></i>
            </div>
    `;

    mainCont.appendChild(ticketCont);

    ticketArr.push({ticketCont, titleColor, ticketTask, ticketID});

    let ticketLockElem = ticketCont.querySelector(".lock-icon");
    let ticketLock = ticketLockElem.children[0];
    let taskArea = ticketCont.querySelector(".task-area");

    let ticketTitle = ticketCont.querySelector(".ticket-color");

    ticketTitle.addEventListener("click", (e) => {
        console.log("hiii");
        ticketTitle.classList.remove(titleColor);
        ticketCont.classList.add();
    })

    ticketLock.addEventListener("click", (e) => {
        handleLock(ticketLock, taskArea);
    })
    

    ticketCont.addEventListener("click", (e)=>{
        handleRemoval(ticketCont);
    })
}

function handleRemoval(ticket){
    if(removeFlag){
        ticket.remove();
    }
}

function handleLock(ticketLock, taskArea)
{
    
    if(ticketLock.classList.contains("fa-lock")){
        ticketLock.classList.remove("fa-lock");
        ticketLock.classList.add("fa-lock-open");
        taskArea.setAttribute("contenteditable", "true");
    }
    else{
        ticketLock.classList.remove("fa-lock-open");
        ticketLock.classList.add("fa-lock");
        taskArea.setAttribute("contenteditable", "false");
    }
}

function handleColor(ticketTitle, ticketColor)
{
    
}