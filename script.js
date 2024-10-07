// Function to calculate the engagement score
function calculateEngagement() {
    // Retrieve input values
    var F = parseFloat(document.getElementById('followers').value.replace(/,/g, ''));
    var L = parseFloat(document.getElementById('likes').value.replace(/,/g, ''));
    var C = parseFloat(document.getElementById('comments').value.replace(/,/g, ''));
    var V = parseFloat(document.getElementById('views').value.replace(/,/g, ''));
    var displayScale = document.getElementById('scale').value;
  
    // Validate inputs
    if (isNaN(F) || F <= 0) {
      showResult("Please enter a valid number of followers.");
      return;
    }
    if (isNaN(L) || L < 0) L = 0;
    if (isNaN(C) || C < 0) C = 0;
    if (isNaN(V) || V < 0) V = 0;
  
    // Calculate engagement rates
    var LR = (L / F) * 100; // Like Rate (%)
    var CR = (C / F) * 100; // Comment Rate (%)
    var VR = (V / F) * 100; // View Rate (%)
  
    // Apply weights (Comments are twice as important)
    var w_CR = 2;
    var w_LR = 1;
    var w_VR = 1;
    var totalWeight = w_CR + w_LR + w_VR;
  
    // Calculate Engagement Score (E)
    var E = ((CR * w_CR) + (LR * w_LR) + (VR * w_VR)) / totalWeight;
  
    // Format the result
    var resultText = "";
    if (displayScale === "percentage") {
      resultText = "Engagement Score: <span class='highlight'>" + E.toFixed(2) + "%</span>";
    } else {
      resultText = "Engagement Score: <span class='highlight'>" + E.toFixed(2) + " / 100</span>";
    }
  
    // Display the result
    showResult(resultText);
  }
  
  // Function to display the result
  function showResult(message) {
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "<p>" + message + "</p>";
    resultDiv.style.display = "block";
  }
  
  // Add event listener to the calculate button
  document.getElementById('calculateBtn').addEventListener('click', calculateEngagement);
  