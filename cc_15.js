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

function addRiskItem(riskName, riskLevel, riskDepartment) {
    // Function to create and add a risk card
    const riskCard = document.createElement("div"); // Create a new risk card

    riskCard.setAttribute("class", "risk-card");
    riskCard.setAttribute("storedLevel", riskLevel); // Set stored level attribute

    
    riskCard.innerHTML = `
        <h3>${riskName}</h3>
        <p><strong>Level:</strong> <span class="riskLevel">${riskLevel}</span></p>
        <p><strong>Department:</strong> ${riskDepartment}</p>`; 
    // Adding inside card using an HTML template

// Task 3 - Removing Risk Items
const resolveButton = document.createElement("button");
resolveButton.textContent = "Resolve"; // Created a button

resolveButton.addEventListener("click", (event) => {
    // When the button is clicked, the card is removed
    event.stopPropagation(); // Task 6 - stopPropagation 
    riskCard.parentNode.removeChild(riskCard); // Removes the card from the dashboard
});

riskCard.appendChild(resolveButton); // Puts the resolve button to the risk card

//Task 6 - Event Propagation 
riskCard.addEventListener("click", (event) => {
    event.stopPropagation(); // Stops propagating 
});
    // Task 4: Categorizing Risks by Level
    if (riskLevel === "Low") {
        riskCard.style.backgroundColor = "green"; // Low shows green
    } else if (riskLevel === "Medium") {
        riskCard.style.backgroundColor = "yellow"; // Medium shows yellow
    } else if (riskLevel === "High") {
        riskCard.style.backgroundColor = "red"; // High shows red
    }

    riskDashboard.appendChild(riskCard); // Adds the new risk card to the dashboard
}

//Task 5 - Bulk Risk Updates
const increaseRiskButton = document.createElement("button");
increaseRiskButton.textContent = "Increase Risk Levels";
// Create a button that increases the risk levels


riskDashboard.appendChild(increaseRiskButton);
//adds button to dashboard


increaseRiskButton.addEventListener("click", function() {
    allIncrease(); // function to increase risk levels
}); //when button is clicked level is updated


function allIncrease() {
    document.querySelectorAll(".risk-card").forEach(riskCard => {
        const levelParagraph = riskCard.querySelector(".riskLevel"); 
        let currentLevel = riskCard.getAttribute("storedLevel"); //takes risk level

        if (currentLevel === "Low") {
            // changes from low to medium 
            riskCard.setAttribute("storedLevel", "Medium");
            levelParagraph.textContent = "Risk Level: Medium";
            riskCard.style.backgroundColor = "yellow"; // Make it yellow for Medium
        } else if (currentLevel === "Medium") {
            // Change from medium to high
            riskCard.setAttribute("storedLevel", "High");
            levelParagraph.textContent = "Risk Level: High";
            riskCard.style.backgroundColor = "red"; // Make it red for High
        }
    });
}
