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
        <p><strong>Department:</strong> ${riskDepartment}</p>`;

    // Task 3 - Removing Risk Items
    const resolveButton = document.createElement("button");
    resolveButton.textContent = "Resolve"; // Created a button

    resolveButton.addEventListener("click", (event) => {
        // When the button is clicked, the card is removed
        event.stopPropagation(); // Does not affect other cards
        riskCard.parentNode.removeChild(riskCard); // Removes the card from the dashboard
    });

    riskCard.appendChild(resolveButton); // Puts the resolve button to the risk card

 //Task 4: Categorizing Risks by Level
    if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "green"; // low shows green card
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "yellow"; // Medium shows yellow
        riskCard.style.backgroundColor = "red"; // High shows red
    }

    riskDashboard.appendChild(riskCard); // Adds to dashboard
}
