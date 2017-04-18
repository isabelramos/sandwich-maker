var showSelectedToppings = document.getElementById("selected-toppings");
var showPrice = document.getElementById("final-price");


// Variable to hold the final price. Default to 0.
var finalSandwichToppings = [];
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <div> element that has all the topping options:
var breadChooser = document.getElementById("bread-chooser");
var meatChooser = document.getElementById("meat-chooser");
var cheeseChooser = document.getElementById("cheese-chooser");
var veggieChooser = document.getElementById("veggie-chooser");
var condimentChooser = document.getElementById("condiment-chooser");


meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Check to see if selected topping has been checked
  var meatIsChecked = checkTopping(selectedTopping);

  if (meatIsChecked) {
  	// Remove topping + price
  	var meatPrice = SandwichMaker.getMeatPrices(selectedTopping);
  	var meatIndex = finalSandwichToppings.indexOf(selectedTopping);
  	finalSandwichToppings.splice(meatIndex, 1);
	finalSandwichPrice -= meatPrice;
  } else {
  	// Add topping + price
	  var meatPrice = SandwichMaker.getMeatPrices(selectedTopping);
	  finalSandwichToppings.push(selectedTopping);
	  finalSandwichPrice += meatPrice;
  }
});

cheeseChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Check to see if selected topping has been checked
  var cheeseIsChecked = checkTopping(selectedTopping);

  if (cheeseIsChecked) {
  	// Remove topping + price
  	var cheesePrice = SandwichMaker.getCheesePrices(selectedTopping);
  	var cheeseIndex = finalSandwichToppings.indexOf(selectedTopping);
  	finalSandwichToppings.splice(cheeseIndex, 1);
	finalSandwichPrice -= cheesePrice;
  } else {
  	// Add topping + price
	  var cheesePrice = SandwichMaker.getCheesePrices(selectedTopping);
	  finalSandwichToppings.push(selectedTopping);
	  finalSandwichPrice += cheesePrice;
  }
});

breadChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Check to see if selected topping has been checked
  var breadIsChecked = checkTopping(selectedTopping);

  if (breadIsChecked) {
  	// Remove topping + price
  	var breadPrice = SandwichMaker.getBreadPrices(selectedTopping);
  	var breadIndex = finalSandwichToppings.indexOf(selectedTopping);
  	finalSandwichToppings.splice(breadIndex, 1);
	finalSandwichPrice -= breadPrice;
  } else {
  	// Add topping + price
	  var breadPrice = SandwichMaker.getBreadPrices(selectedTopping);
	  finalSandwichToppings.push(selectedTopping);
	  finalSandwichPrice += breadPrice;
  }
});

veggieChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Check to see if selected topping has been checked
  var veggieIsChecked = checkTopping(selectedTopping);

  if (veggieIsChecked) {
  	// Remove topping + price
  	var veggiePrice = SandwichMaker.getVeggiePrices(selectedTopping);
  	var veggieIndex = finalSandwichToppings.indexOf(selectedTopping);
  	finalSandwichToppings.splice(veggieIndex, 1);
	finalSandwichPrice -= veggiePrice;
  } else {
  	// Add topping + price
	  var veggiePrice = SandwichMaker.getVeggiePrices(selectedTopping);
	  finalSandwichToppings.push(selectedTopping);
	  finalSandwichPrice += veggiePrice;
  }
});

condimentChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  // Check to see if selected topping has been checked
  var condimentIsChecked = checkTopping(selectedTopping);

  if (condimentIsChecked) {
  	// Remove topping + price
  	var condimentPrice = SandwichMaker.getCondimentPrices(selectedTopping);
  	var condimentIndex = finalSandwichToppings.indexOf(selectedTopping);
  	finalSandwichToppings.splice(condimentIndex, 1);
	finalSandwichPrice -= condimentPrice;
  } else {
  	// Add topping + price
	  var condimentPrice = SandwichMaker.getCondimentPrices(selectedTopping);
	  finalSandwichToppings.push(selectedTopping);
	  finalSandwichPrice += condimentPrice;
  }
});

  function checkTopping (whatToppingIsBeingChecked) {
  	if (finalSandwichToppings.includes(whatToppingIsBeingChecked)) {
  		return true;
  	} else {
  		return false;
	}
}


// Add the topping to the SandwichMaker to increase the total price
window.addEventListener("change", function(event) {
  showSelectedToppings.innerHTML = finalSandwichToppings;
  showPrice.innerHTML = finalSandwichPrice.toFixed(2);	
});
