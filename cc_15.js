//Task 1 - Base Structure Setup

const riskDashboard = document.getElementById("riskDashboard")

console.log("Risk Dashboard Loaded")

//logging risk dashboa
 
//task 2

document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault() //stops page from reloading when it is submitted

    const riskName = document.getElementById("riskName").value
    const riskLevel = document.getElementById("riskLevel").value
    const riskDepartment = document.getElementById("riskDepartment").value
    //gets value from form 

.
    addRiskItem(riskName, riskLevel, riskDepartment)
    //created a new risk card


    this.reset()
   }) //resets after submitting 

    
    function addRiskItem(riskName, riskLevel, riskDepartment) {
        const riskCard = document.createElement("div") //created a new risk card

        
        riskCard.setAttribute("class", "risk-card")
        riskCard.setAttribute("id", riskLevel)
        //sets class and ID

        
        riskCard.innerHTML = 
            `<h3>${riskName}</h3>
            <p><strong>Level:</strong> ${riskLevel}</p>
            <p><strong>Department:</strong> ${riskDepartment}</p>`}
            //added the conetent inside carsd with using html template