console.log("Hello");

let addBtn = document.querySelector(".add-btn");

let modalCont = document.querySelector(".modal-cont");

let mainCont = document.querySelector(".main-cont");

let textareaCont = document.querySelector(".textarea-cont");

let addFlag= false;


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

modalCont.addEventListener("keydown", (e) => {
    let key = e.key;

    if(key == 'Shift'){
        createTicket();
        modalCont.style.display = "none";
        textareaCont.value = "";
    }
})


function createTicket()
{
    let ticketCont = document.createElement("div");

    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
            <div class="ticket-color"></div>
            <div class="ticket-id">Sample Id</div>
            <div class="task-area">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptates eveniet quia facere quidem blanditiis? Lorem ipsum dolor sit amet, consectetur adipisicing elit.lorum delectus adipisci impedit aliquam m
            </div>
    `;

    mainCont.appendChild(ticketCont);
}