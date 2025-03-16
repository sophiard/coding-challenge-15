// Task 1 - Base Structure Setup
const riskDashboard = document.getElementById("riskDashboard");
console.log("Risk Dashboard Loaded");

// Task 2 - Adding Risk Items
document.getElementById("riskForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Stops page from reloading when submitted

    const riskName = document.getElementById("riskName").value;
    const riskLevel = document.getElementById("riskLevel").value;
    const riskDepartment = document.getElementById("riskDepartment").value;
    // Get values from the form

    addRiskItem(riskName, riskLevel, riskDepartment);
    // Create a new risk card

    this.reset(); // Resets the form after submission
});

// Function to create and add a risk card
function addRiskItem(riskName, riskLevel, riskDepartment) {
    const riskCard = document.createElement("div"); // Create a new risk card

    riskCard.setAttribute("class", "risk-card");
    riskCard.setAttribute("id", riskLevel); // Set class and ID

    // Add content inside the card using an HTML template
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Level:</strong> ${riskLevel}</p>
        <p><strong>Department:</strong> ${riskDepartment}</p>
    `;

// Task 3 - Removing Risk Items
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"; // made button
    //create a button to resolve/remove the risk card 

   
    resolveButton.addEventListener("click", (event) => {
        // when the button is lcicked the card is removed
        event.stopPropagation(); // does not affecr other cards 

        riskCard.parentNode.removeChild(riskCard); 
    });
d
    riskCard.appendChild(resolveButton);
    //puts the resolve button to the risk card

    
    riskDashboard.appendChild(riskCard);
    //adds to dashboard
}
