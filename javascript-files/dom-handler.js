var showPrice = document.getElementById("final-price");

// Variable to hold the final price. Default to 0.
var finalSandwichPrice = meat;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <div> element that has all the meat options:
var meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  showPrice.innerHTML += finalSandwichPrice;

  // Determine the price of the topping chosen


  // Add the topping to the SandwichMaker to increase the total price
});