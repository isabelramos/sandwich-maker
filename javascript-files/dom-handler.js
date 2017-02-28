var showSelectedToppings = document.getElementById("selected-toppings");
var showPrice = document.getElementById("final-price");

// Variable to hold the final price. Default to 0.
var finalSandwichToppings = [];
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <div> element that has all the meat options:
var meatChooser = document.getElementById("meat-chooser");


meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Check to see if selected topping has been checked
  var meatIsChecked = checkMeat(selectedTopping);
  if (meatIsChecked) {
  	// Remove topping + price
  	var meatPrice = SandwichMaker.getMeatPrices(selectedTopping);
  	finalSandwichToppings.pop(selectedTopping); // POP OBVIOUSLY DOESN'T WORK, NEED FOR LOOP?
	finalSandwichPrice -= meatPrice;
  } else {
  	// Add topping + price
	  var meatPrice = SandwichMaker.getMeatPrices(selectedTopping);
	  finalSandwichToppings.push(selectedTopping);
	  finalSandwichPrice += meatPrice;
  }


  // Add the topping to the SandwichMaker to increase the total price
  showSelectedToppings.innerHTML = finalSandwichToppings;
  showPrice.innerHTML = finalSandwichPrice;

});

  function checkMeat (whatMeatIsBeingChecked) {
  	if (finalSandwichToppings.includes(whatMeatIsBeingChecked)) {
  		return true;
  	} else {
  		return false;
	}
}

showPrice.innerHTML = finalSandwichPrice;

